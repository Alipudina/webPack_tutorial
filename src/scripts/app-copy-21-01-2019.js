
import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Images } from './images';
// import { Navbar } from './navbar';
import { BlogPostData, BlogPostContent, BlogPost } from './blogs';



class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        {/*<BlogPost applyClass="display-1">*/}
        <BlogPost makeBig={true}>
          <BlogPostContent city="Athens" image="./images/forest.jpg" isSeen={true}/>
          <BlogPostData author="ALI"/>
        </BlogPost>

        {/*<BlogPost applyClass="display-4">*/}
        <BlogPost makeBig={false}>
          <BlogPostContent city="Athens" image="./images/lifeguard.jpg" isSeen={false}/>
          <BlogPostData author="ALI"/>
        </BlogPost>
      </React.Fragment>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('myApp'));
