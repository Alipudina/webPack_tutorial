
{/*
import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Images } from './images';
import { Navbar } from './navbar';
*/}

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

// #######################################################################################################################
class FootballPlayer extends React.Component {

  calculateGoalsRatio(caps, goals) {
    return (goals / caps).toFixed(2);
  }

  render() {
    // const firstName = 'cristiano';
    // const lastName = 'Ronaldo';

    // return <h3 className="fontFamily" style={ {fontSize: '5vw'} }>{firstName} {lastName} scored {this.calculateGoalsRatio(50, 65)} goals in this year</h3>
    return <h3>{this.props.firstName} {this.props.lastName} scored {this.calculateGoalsRatio(this.props.goals, this.props.caps)} goals in this year</h3>

  }
}
FootballPlayer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  caps: PropTypes.number.isRequired,
  goals: PropTypes.number.isRequired
}
ReactDOM.render(<FootballPlayer firstName="Cristiano" lastName="Ronaldo" caps={50} goals={60} />, document.getElementById('app'));
ReactDOM.render(<FootballPlayer firstName="Leo" lastName="Messi" caps={56} goals={40} />, document.getElementById('messy'));

// #################################################################################################################
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

// ###################################################################################################################
class Menu extends React.Component {
  render() {
    const foodStock = [
      {product: 'Milk', quantity: 5},
      {product: 'Beer', quantity: 12},
      {product: 'Bread', quantity: 0},
      {product: 'Sausage', quantity: 4}
    ];

    // return <ul>{foodStock.map(item => item.quantity > 0  && <li>{item.product}</li>)}</ul>;
    return <ul>{foodStock.map((elem, position, array) => elem.quantity > 0  && <li key={position.toString()}>{elem.product}</li>)}</ul>;
  }
}
ReactDOM.render(<Menu />, document.getElementById('menu'));


// ##################################################################################################################

// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// #################################################################################################################




class MainComponent extends React.Component {

  render() {

     {/* const cities = ['Kobenhavn', 'Hamburg', 'Athens', 'Santorini']; */}
      const data = [
        {title: , source: , description: , city: ''},
        {title: , source: , description: , city: ''},
        {title: , source: , description: , city: ''},
        {title: , source: , description: , city: ''}
      ]

    return (
      <React.Fragment>
        <Navbar />

        {/* {cities.map((city, index) => {<Images
                                      key={index}
                                      title={city}
                                      imageSource={'./images'+ city.toLowerCase() + '.jpg'}
                                      description={city + 'view'} />}
                                    )}
                                    */}


        {data.map((dataPoint, index) => {<Images
                                      key={index}
                                      identifier={dataPoint.city}
                                      title={dataPoint.title}
                                      imageSource={dataPoint.source}
                                      description={dataPoint.description} />}
                                    )}

        <Images identifier="first" text="This is a first image" source="./images/alps.jpg" paragraph="Some text about the first image" />
        <Images identifier="second" text="This is a second image" source="./images/forest.jpg" paragraph="Some text about the second image" />
        <Images identifier="third" text="This is a third image" source="./images/canyon.jpg" paragraph="Some text about the third image" />
        <Images identifier="forth" text="This is a forth image" source="./images/swiss.jpg" paragraph="Some text about the forth image" />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('myApp'));


// ReactDOM.render(<Images identifier="first" text="This is a first image" source="./images/alps.jpg" paragraph="Some text about the first image" />, document.getElementById('firstImage'));
// ReactDOM.render(<Images identifier="second" text="This is a second image" source="./images/forest.jpg" paragraph="Some text about the second image" />, document.getElementById('secondImage'));
// ReactDOM.render(<Images identifier="third" text="This is a third image" source="./images/canyon.jpg" paragraph="Some text about the third image" />, document.getElementById('thirdImage'));
// ReactDOM.render(<Images identifier="forth" text="This is a forth image" source="./images/swiss.jpg" paragraph="Some text about the forth image" />, document.getElementById('forthImage'));
// ############################################################################################################################
