import React, { Component } from 'react';

// Define a class component named Classcounting
class Classcounting extends Component {
    constructor(props) {
        super(props);
        // Initialize state with count set to 0
        this.state = {
            count: 0
        };
    }

    // Method to increase count by 1
    increase = () => {
        // Update count in state using setState
        this.setState({ count: this.state.count + 1 });
    }

    // Method to decrease count by 1
    decrease = () => {
        // Update count in state using setState
        this.setState({ count: this.state.count - 1 });
    }

    // Render method to display component UI
    render() {
        return (
            <>
                <h1>Class Based Component Counting</h1>
                <p>Count: {this.state.count}</p> {/* Display current count from state */}
                {/* Button to increase count by calling increase method onClick */}
                <button onClick={this.increase}>+</button>
                {/* Button to decrease count by calling decrease method onClick */}
                <button onClick={this.decrease}>-</button>
            </>
        );
    }
}

// Export Classcounting component as the default export
export default Classcounting;
