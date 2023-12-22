import {Component} from 'react'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', textarea: '', commentsCount: 0, isLiked: false}

  changeToLikeButton = () => {
    const {isLiked} = this.state

    if (isLiked) {
      this.setState({isLiked: false})
    } else {
      this.setState({isLiked: true})
    }
  }

  render() {
    const {name, textarea, commentsCount} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Comments</h1>
          <p className="para">Say something about 4.0 Technologies</p>
          <form onSubmit={this.submitForm}>
            <input className="input1" type="text" onChange={this.changeInput} />
            <textarea className="textareaItem" rows="5" cols="50" />
            <button className="btn-item" type="submit">
              Add Comment
            </button>
          </form>
        </div>
        <div className="comment-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image"
          />
        </div>
        <hr />
        <div className="comments">
          <p className="para1">
            <span className="span-item">{commentsCount}</span>Comments
          </p>
          <ul className="comments-container">
            <CommentItem
              name={name}
              textarea={textarea}
              listItems={initialContainerBackgroundClassNames}
              changeToLikeButton={this.changeToLikeButton}
            />
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
