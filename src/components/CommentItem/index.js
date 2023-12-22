import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {name, textarea, listItems, isLiked, changeToLikeButton} = props
  const nameItem = name.slice(0)
  const deleteItem = () => {
    console.log('hi')
  }
  const likeButton = () => {
    changeToLikeButton()
  }
  const text = isLiked ? 'Liked' : 'Like'
  const imageUrl = () => {
    if (isLiked) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
          className="liked"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        className="like"
      />
    )
  }

  return (
    <li className="comment-item">
      <div className="cont">
        <div className="name-container">
          <p className="para3">{nameItem}</p>
        </div>
        <div className="details">
          <div className="timer">
            <h1 className="heading2">{name}</h1>
            <p className="timing">hi</p>
          </div>
          <p className="para4">{textarea}</p>
        </div>
      </div>
      <div className="liked-cont">
        <div className="cont2">
          <button className="liked-button" type="button" onClick={likeButton}>
            {imageUrl}
          </button>
          <p className="like-para">{text}</p>
        </div>
        <button className="delete-button" type="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
