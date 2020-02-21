import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
        name: 'Name',
        message: 'Message'
        };
        }

        
       render() {
        return (
        <div>
        <input
        value={this.state.name}
        onChange={(event) => { this.setState({ name: event.target.value })}} />
        <button onClick={this.handleClick}>Submit</button>

         <input
        value={this.state.message}
        onChange={(event) => { this.setState({ message: event.target.value })}} />
        <button onClick={this.handleClick}>Submit</button>
        </div>
        );
        }
        
       }
       
       export default Form;