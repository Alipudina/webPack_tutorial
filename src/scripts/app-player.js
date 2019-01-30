import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { PlayerInfo } from './player';

class App extends React.Component {

  render() {

      return (
        <div className="container d-flex">
          <PlayerInfo playerName="Marco Reus" playerDescription="My favorite player since he was playing in 2012 in Gladbach" source="http://mediadb.kicker.de/news/1000/1020/1100/3000/artikel03/1040417/reus800-1547845972.jpg"/>
          <PlayerInfo playerName="CR7" playerDescription="CR7 on a mission" source="https://images.performgroup.com/di/library/GOAL/92/2/cristiano-ronaldo-juventus_pzo09hq8ghhf17gkn00sjok6k.jpg?t=1373157045"/>
          <PlayerInfo playerName="Leo  Messi" playerDescription="Whatever, someone has to be the villain!" source="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/08/19/15347041965884.jpg"/>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
