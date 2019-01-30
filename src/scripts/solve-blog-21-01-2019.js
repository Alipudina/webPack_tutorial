import  React from 'react';
import PropTypes from 'prop-types'

export class BlogPostData extends React.Component {
  render() {
    return (
      <div className="card-header">
        <h4 className="display-4">{this.props.childAuthor} wrote:</h4>
      </div>
    )
  }
}

export class BlogPostContent extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h3 className="display-2">How i survived in {this.props.city} during christmas</h3>
        {this.props.childShowImage && <img src={this.props.childImage} className="rounded mx-auto d-block" style={{width: '70vw', height: '40vw'}}/>}
        <p className="lead">I almost killed my self. Putting me on the same table with relatives
        that i have no commons, is a good experiment for my nerves.
        </p>
      </div>
    )
  }
}

export class BlogPost extends React.Component {
  render() {
    const today = new Date();
    return (

      <div className="card">
        <BlogPostData childAuthor={this.props.parentAuthor}/>
        <BlogPostContent city={this.props.city} childImage={this.props.parentImage} childShowImage={this.props.parentShowImage}/>
        <div className="card-footer">
          <span className={this.props.makeBig ? "display-1" : "display-4"}>
          Published on: { today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() }
          </span>
        </div>
      </div>

    )
  }
}

BlogPostContent.propTypes = {
  city: PropTypes.string,
  image: PropTypes.string.isRequired,
  showImage: PropTypes.bool.isRequired
}

BlogPostData.propTypes = {
  author: PropTypes.string.isRequired
}

BlogPost.propTypes = {
  makeBig: PropTypes.bool.isRequired
}
