
import React from 'react';

export class Navbar extends React.Component {

  // const myNavbar = [
  //   {network: 'facebook'},
  //   {network: 'twitter'},
  //   {network: 'instagra'},
  //   {network: 'whatsapp'}
  // ];
  render() {


    const myNavbar = [
      {network: 'first'},
      {network: 'second'},
      {network: 'third'},
      {network: 'forth'}
    ];

    return (
      <React.Fragment>
       {myNavbar.map((elem, index) => <li className="navbarCss" key={index.toString()}><a href={'#' + elem.network}>{elem.network}</a></li>)}
     </React.Fragment>
    )
  }
}
