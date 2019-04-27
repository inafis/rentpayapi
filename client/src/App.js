import React from 'react';
import Button from '@material-ui/core/Button';
import axios from "axios";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getDataFromDb()
  }

  componentWillUnmount(){
    //tbd unecessary for testing
  };

  getDataFromDb = () => {
    axios.get("http://localhost:3000/users/")
      .then(result => this.setState({
        data: result.data
      }));
  };

  render() {
    const { data } = this.state;
    return <div className="App">
      <header className="App-header">
        <p>
          Let's build something here
        </p>
        <ul>{data.length <= 0
          ? "No DB Entries" : data.map(data => (
            <li style={{ padding: "10px" }} key={data.email}>{data.firstName} {data.lastName}</li>))}
        </ul>
        <Button variant="contained" color="primary">
          Pay your rent
        </Button>
      </header>
    </div>
  };
}

export default App;
