import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Player/playerList';
import PlayerSingle from './Player/playerSingle';
import PlayerForm from './Player/playerForm';

function App(){
  const [ players, setPlayers] = useState([]);
  const [ currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    document.title = 'Soccer Dashboard';
    
    const url = 'http://localhost:4000/players/';

    const axiosCall = async () => {
      const response = await axios(url);
      setPlayers(response.data);
    }
    axiosCall();
  }, []);

  // constructor(props : any){
  //   super(props);
  //   this.state= {
  //     players: [],
  //     currentPlayer: {}
  //   }
  //   this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  // }

  // updateCurrentPlayer = (item : any) => {
  //   this.setState({
  //     currentPlayer : item
  //   })
  // }
  return (
    <div className="container-fluid">
      <div className="row">
      <nav>
        <div className="nav-wrapper blue darken-1">
          <a href="/" className="brand-logo">Soccer Management</a>
        </div>
      </nav>
      </div>
      <div className="row">
        <div className="col s3">
          <PlayerList players={players} updateCurrentPlayer={setCurrentPlayer}/>
        </div>
        <div className="col s9">
          <PlayerSingle player={currentPlayer} />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
}

export default App;