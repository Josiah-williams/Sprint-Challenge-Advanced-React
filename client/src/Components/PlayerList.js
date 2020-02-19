import React from 'react';

class PlayerList extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(result => { console.log(result); this.setState({ players: result }) })
            .catch(err => console.log('Error fetching players.', err));
    }

    render() {
        return (
            <div>
                <h1>players</h1>
            {this.state.players.map(player => <li key={player.id}>
                <h2>Name: {player.name}</h2>
                <h2>Country: {player.country}</h2>
                <h2>Searches: {player.searches}</h2>
              </li>)}
            </div>
        );
    }
}

export default PlayerList