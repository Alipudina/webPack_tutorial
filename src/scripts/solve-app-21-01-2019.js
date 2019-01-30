import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { InstaBox } from './instabox';
import { NavBar } from './navbar';
import { BlogPost } from './blogs';

class App extends React.Component {

  render() {

      return (
        <React.Fragment>
          <BlogPost makeBig={true} city="Kobenhavn" parentAuthor="Kostas Diakogiannis" parentImage="./images/kobenhavn.jpg" parentShowImage={false}/>
          <BlogPost makeBig={true} city="Hamburg" parentAuthor="Ali Pudina" parentImage="./images/hamburg.jpg" parentShowImage={true}/>
          <BlogPost makeBig={true} city="Lisbon" parentAuthor="Mohamad Lahham" parentImage="https://www.discoverwalks.com/blog/wp-content/uploads/2018/03/lisbonintwodays-816x538.jpg" parentShowImage={true}/>
        </React.Fragment>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
