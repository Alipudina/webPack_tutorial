
import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// class Title extends React.Component {
//
//   render() {
//     const framework = 'React';
//     const myItem = {firstName: 'ali', lastName: 'pudina'};
//
//     return (
//             <div>
//               <h1 className="big green">This is a headung from {framework}</h1>
//               <img src="./images/colorado.jpg" width="300" height="300" />
//               <h3 className="verybig">Hello my new {myItem.firstName} and {myItem.lastName}</h3>
//             </div>
//           );
//   }
// }
//
// ReactDOM.render(<Title />, document.getElementById('app'));

class Title extends React.Component {

  calculateGoalsRatio(caps, goals) {
    return goals / caps;
  }

  render() {
    const firstName = 'cristiano';
    const lastName = 'Ronaldo';

    return <h3 className="fontFamily" style={ {fontSize: '5vw'} }>{firstName} {lastName} scored {this.calculateGoalsRatio(50, 65)} goals in this year</h3>


  }
}

ReactDOM.render(<Title />, document.getElementById('app'));


class Conditional extends React.Component {
  render() {
    const isSeen = true;
    return isSeen && <h3>You see me</h3>

    // if (isSeen) {
    //   return <h3 className="big">You see me</h3>
    // } else {
    //   return '';
    // }


  }
}

ReactDOM.render(<Conditional />, document.getElementById('conditional'));

class Menu extends React.Component {
  render() {
    const foodStock = [
      {product: 'Milk', quantity: 5},
      {product: 'Beer', quantity: 12},
      {product: 'Bread', quantity: 0},
      {product: 'Sausage', quantity: 4}
    ];

    return <ul>{foodStock.map(item =>item.quantity > 0  && <li>{item.product}</li>)}</ul>;
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));
