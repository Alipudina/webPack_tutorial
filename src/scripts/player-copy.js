import React from 'react';

export class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="card col-lg-4 col-md-6 col-xs-12 mx-2 text-center">
        <div className="card-header">
          <h4 className="title">{this.props.playerName}</h4>
        </div>
        <PlayerImage playerImageSource={this.props.source}/>
        <div className="card-footer">
          <p className="lead">{this.props.playerDescription}</p>
        </div>
      </div>
    )
  }
}

class PlayerImage extends React.Component {
  render() {
    return (
      <div className="card-body">
        <img src={this.props.playerImageSource} className="col-lg-8" style={{width:'70%', height:'70%'}}/>
      </div>
    )
  }
}
