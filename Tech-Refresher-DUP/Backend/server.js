const pgp = require('pg-promise')();
const winston = require('winston');
const express = require('express');
const bcrypt = require('bcrypt');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const bodyParser = require("body-parser"); // for parsing application/json
const app = express();
const db = pgp("postgres://kugfhzwa:XDEvpJvLkLV3cPozzlgmC2L9PRM5BJCw@ruby.db.elephantsql.com/kugfhzwa");
const cors = require('cors');


app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(YAML.load('./api.yaml')));
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

function clientError(req, message, errorCode) {
    logger.log({
        level: 'info',
        endpoint: req.path,
        method: req.method,
        query: req.query,
        pathParameters: req.params,
        body: req.body,
        ip: req.ip,
        error: errorCode,
        message: message,
        timestamp: new Date().toUTCString(),
    });
}

let clientID = 0;
app.all('/*', (req, res, next) => {
    clientID++;
    logger.log({
        level: 'info',
        endpoint: req.path,
        method: req.method,
        query: req.query,
        pathParameters: req.params,
        body: req.body,
        ip: req.ip,
        timestamp: new Date().toUTCString(),
    });
    next()
});



/*
Endpoint:
    GET endpoint for fetching tech cards
*/

app.get('/tech', async (req, res) => {
  res.json(await db.many('SELECT * FROM tech ORDER BY RANDOM() LIMIT 10'))
});


/*
Endpoint:
    GET endpoint for users login
*/
app.get('/login', async (req, res) => {
    try {
        const loginTestData = await db.many('SELECT * FROM login_test');
        res.json(loginTestData);
    } catch (error) {
        console.error('Error fetching login test data:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

/*
Endpoint:
    GET endpoint to retrieve user by email
*/
app.get('/users/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

/*
Endpoint:
    POST endpoint to register a new user
*/
app.post('/users', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser) {
            clientError(req, 'Email already exists', 400); // Log client error
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        await db.none('INSERT INTO users(email, password) VALUES($1, $2)', [email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error.message);
        clientError(req, 'Failed to register user', 500); // Log client error
        res.status(500).json({ message: 'Failed to register user' });
    }
});

app.delete('/tech/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.oneOrNone('DELETE FROM tech WHERE id = $1', [id]);
        res.json({ message: `Tech data with ID ${id} deleted successfully` });
    } catch (error) {
        console.error('Error deleting tech data:', error.message);
        clientError(req, `Failed to delete tech data with ID ${id}`, 500); // Log client error
        res.status(500).json({ message: 'Failed to delete tech data' });
    }
});

app.listen(3003, () => {
    console.log('Server is running on port 3003');
});
