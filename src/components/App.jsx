import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chirpName: "",
      chirpMessage: "",
      chirps: [
        {
          name: "Hallie",
          message: "Yeet!"
        },
        {
          name: "Nyya",
          message: "Still I rise"
        },
        {
          name: "Dustin",
          message: "I like vroom vroom"
        }
      ]
    };
  }
  handleChirpName(e) { 
      this.setState({chirpName: e.target.value});
     
  }
  handleChirpMessage(e) { 
    this.setState({chirpMessage: e.target.value});
  }
  submitChirp(e) {}

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={e => this.handleChirpName(e)} />
          <input type="text" onChange={e => this.handleChirpMessage(e)} />
        </div>
        {this.state.chirps.map((chirp, id) => {
          return (
            <div key={id}>
              <div>{chirp.message}</div>
              <h1>{chirp.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
