import React from 'react';
import {allPlayers} from './photogalleryData';
import {buttonData as allButtons, uniqueClasses} from './buttonData';

// the fotos(data) is in another file (photogslleryData.js)

// const allPlayers = [...footballers, ...basketballers, ...swimmers]

export class Photogallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {choose: allPlayers}
  }

  filterBy(sport) {
    if (sport === 'allPlayers') {
      this.setState({choose: allPlayers});
    } else {
      this.setState({choose: allPlayers.filter(item => item.category === sport)})
    }
  }

  filterImages(ev) {
    const targetElementIdentifier = ev.target.getAttribute('identifier');
    this.filterBy(targetElementIdentifier);
  }



  render() {

    return (
      <React.Fragment>
        {allButtons.map((button, index) => <button className={['btn', 'btn-lg', uniqueClasses[index]].join(' ')} key={index} identifier={button.identifier} className="btn btn-primary" onClick={this.filterImages.bind(this)}>{button.text}</button>)}

        <RenderImages choose={this.state.choose}/>
      </React.Fragment>
    )
  }
}


// functional stateless components
const RenderImages = props =>  {

    return (
      <div className="d-flex justifty-content-around flex-wrap">
        {props.choose.map((title, index) => <img key={index} src={title.url} width='30%' height='200'/>)}
      </div>
    )
}


// class RenderImages extends React.Component {
//
//   render() {
//     return (
//       <div className="d-flex justifty-content-around flex-wrap">
//         {this.props.choose.map((title, index) => <img key={index} src={title.url} width='30%' height='200'/>)}
//       </div>
//     )
//   }
// }






// handleFootball(ev) {
//   const footballFilter = allPlayers.filter(item => item.category === 'football');
//   // console.log(footballFilter);
//
//   this.setState({choose: footballFilter})
// }
//
// handleSwimm(ev) {
//   const swimFilter = allPlayers.filter(item => item.category === 'swimm');
//   // console.log(footballFilter);
//
//   this.setState({choose: swimFilter})
// }
//
// handlebasketball(ev) {
//
//   this.setState({choose: allPlayers.filter(item => item.category === 'basketball')})
// }
//
// handleAll(ev) {
//
//   this.setState({choose: allPlayers})
// }
