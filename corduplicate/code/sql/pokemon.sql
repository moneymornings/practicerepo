CREATE TABLE pokedex(
    id SERIAL PRIMARY KEY,
    hp INTEGER,
    name VARCHAR(50),
    type VARCHAR(25),
    region VARCHAR(25));


CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    hp INTEGER,
    name VARCHAR(50),
    type VARCHAR(25),
    moves TEXT [],
    abilities VARCHAR(25),
    attack INTEGER,
    defense INTEGER
);

CREATE TABLE attacks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    power INTEGER,
    type VARCHAR(25)
);

INSERT INTO pokemon(hp, name, type, attacks, abilities, attack, defense) VALUES
    (45, 'Bulbasaur', 49, 49),
    (60, 'Ivysaur', 'Grass', 'Chlorophyll', 62, 63),
    (80, 'Venusaur', 'Grass',  'Chlorophyll', 82, 83),
    (39, 'Charmander', 'Fire', 'Solar Power', 52, 43),
    (58, 'Charmeleon', 'Fire', 'Solar Power', 64, 58),
    (78, 'Charizard', 'Fire', 'Solar Power', 84, 78),
    (44, 'Squirtle', 'Water',  'Rain Dish', 48, 65),
    (59, 'Wartortle', 'Rain Dish', 63, 80),
    (79, 'Blastoise', 'Water', 'Hydro Pump, Skull Bash', 'Torrent, Rain Dish', 83, 100),
    (45, 'Caterpie', 'Bug', 'Tackle, String Shot', 'Shield Dust, Run Away', 30, 35),
    (50, 'Metapod', 'Bug', 'Harden', 'Shed Skin', 20, 55),
    (60, 'Butterfree', 'Bug', 'Gust, Confusion', 'Compound Eyes, Tinted Lens', 45, 50),
    (40, 'Weedle', 'Bug', 'Poison Sting, String Shot', 'Shield Dust, Run Away', 35, 30),
    (45, 'Kakuna', 'Bug', 'Harden', 'Shed Skin', 25, 50),
    (65, 'Beedrill', 'Bug', 'Twineedle, Poison Jab', 'Swarm, Sniper', 90, 40),
    (40, 'Pidgey', 'Normal', 'Gust, Quick Attack', 'Keen Eye, Tangled Feet', 45, 40),
    (63, 'Pidgeotto', 'Normal', 'Wing Attack, Air Slash', 'Keen Eye, Tangled Feet', 60, 55),
    (83, 'Pidgeot', 'Normal', 'Hurricane, Brave Bird', 'Keen Eye, Tangled Feet', 80, 75),
    (30, 'Rattata', 'Normal', 'Tackle, Quick Attack', 'Run Away, Guts', 56, 35),
    (55, 'Raticate', 'Normal', 'Hyper Fang, Sucker Punch', 'Run Away, Guts', 81, 60),
    (40, 'Spearow', 'Normal', 'Peck, Fury Attack', 'Keen Eye', 60, 30),
    (65, 'Fearow', 'Normal', 'Drill Run, Sky Attack', 'Keen Eye', 90, 65),
    (35, 'Ekans', 'Poison', 'Poison Sting, Bite', 'Intimidate, Shed Skin', 60, 44),
    (60, 'Arbok', 'Poison', 'Gunk Shot, Acid Spray', 'Intimidate, Shed Skin', 85, 69),
    (35, 'Pikachu', 'Electric', 'Thunder Shock, Quick Attack', 'Static, Lightning Rod', 55, 40),
    (60, 'Raichu', 'Electric', 'Thunderbolt, Quick Attack', 'Static, Lightning Rod', 90, 55),
    (35, 'Sandshrew', 'Ground', 'Scratch, Sand Attack', 'Sand Veil, Sand Rush', 75, 85),
    (50, 'Sandslash', 'Ground', 'Earthquake, Slash', 'Sand Veil, Sand Rush', 100, 110),
    (40, 'Nidoran♀', 'Poison', 'Poison Sting, Scratch', 'Poison Point, Rivalry', 47, 52),
    (55, 'Nidorina', 'Poison', 'Poison Sting, Bite', 'Poison Point, Rivalry', 62, 67),
    (70, 'Nidoqueen', 'Poison', 'Earth Power, Body Slam', 'Poison Point, Rivalry', 92, 87),
    (40, 'Nidoran♂', 'Poison', 'Poison Sting, Peck', 'Poison Point, Rivalry', 57, 40),
    (55, 'Nidorino', 'Poison', 'Poison Sting, Horn Attack', 'Poison Point, Rivalry', 72, 57),
    (65, 'Nidoking', 'Poison', 'Earthquake, Megahorn', 'Poison Point, Rivalry', 102, 77),
    (35, 'Clefairy', 'Fairy', 'Pound, Disarming Voice', 'Cute Charm, Magic Guard', 45, 48),
    (70, 'Clefable', 'Fairy', 'Moonblast, Psychic', 'Cute Charm, Magic Guard', 70, 73),
    (30, 'Vulpix', 'Fire', 'Ember, Quick Attack', 'Flash Fire, Drought', 41, 40),
    (55, 'Ninetales', 'Fire', 'Fire Blast, Flamethrower', 'Flash Fire, Drought', 76, 75),
    (40, 'Jigglypuff', 'Normal', 'Pound, Play Rough', 'Cute Charm, Competitive', 45, 20),
    (55, 'Wigglytuff', 'Normal', 'Hyper Voice, Play Rough', 'Cute Charm, Competitive', 70, 45),
    (35, 'Zubat', 'Poison', 'Wing Attack, Bite', 'Inner Focus, Infiltrator', 45, 35),
    (70, 'Golbat', 'Poison', 'Air Slash, Poison Fang', 'Inner Focus, Infiltrator', 80)


INSERT INTO attacks(name,power,type) 
VALUES
    ('thundershock', 20, 'electric'),
    ('thunderbolt', 30, 'electric'),
    ('ember', 20, 'fire'),
    ('water gun', 30, 'water');

