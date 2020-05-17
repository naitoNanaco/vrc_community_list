import React, { Component } from 'react';
import './App.css';
import Community from './Community';
import { CardColumns } from 'react-bootstrap';

class App extends Component {
  state = { communities: [] };
  componentDidMount() {
    fetch('https://script.google.com/macros/s/AKfycbyXfZM331ywgXy-LK6kRRJONO8hPZgaW24gu_bDr-2tN3USM3Q/exec')
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          communities: responseJson.communities,
        })
      )
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div className="App">
        <CardColumns>
          {this.state.communities.map(community =>
            <Community
              key={community.timestamp}
              name={community.name}
              overview={community.overview}
              entry={community.entry}
              logo={community.logo}
              twitter={community.twitter}
              discord={community.discord}
              establish={community.establish}
            />)
          }
        </CardColumns>
      </div>
    );
  }
}

export default App;
