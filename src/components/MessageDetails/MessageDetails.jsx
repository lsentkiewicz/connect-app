import React, {PropTypes} from 'react'
import moment from 'moment'
import './MessageDetails.scss'
import ActionCard from '../ActionCard/ActionCard'
import BtnSeparator from '../ActionCard/BtnSeparator'
import Comment from '../ActionCard/Comment'
import AddComment from '../ActionCard/AddComment'
import { THREAD_MESSAGES_PAGE_SIZE } from '../../config/constants'

class MessageDetails extends React.Component {

  constructor(props) {
    super(props)
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this)
    this.state = { showAll: false }
  }

  handleLoadMoreClick() {
    this.setState({showAll: true})
    // TODO - handle the case when a topic has more than 20 comments
    // since those will have to retrieved from the server
    // if (!isLoadingComments) {
    //   onLoadMoreComments()
    // }
  }

  render() {
    const {
  title,
  messages,
  // onLoadMoreMessages,
  hasMoreMessages,
  newMessage,
  onNewMessageChange,
  onAddNewMessage,
  isLoadingComments,
  currentUser,
  isAddingComment,
  allowAddingComment} = this.props
    let authorName = currentUser.firstName
    if (authorName && currentUser.lastName) {
      authorName += ' ' + currentUser.lastName
    }
    let _messages = messages
    let _hasMoreMessages = hasMoreMessages
    if (!this.state.showAll && _messages.length > THREAD_MESSAGES_PAGE_SIZE) {
      _messages = _messages.slice(-THREAD_MESSAGES_PAGE_SIZE)
      _hasMoreMessages = true
    }
    return (
    <ActionCard className="main-messaging">
      <ActionCard.Header title={title}>
        {_hasMoreMessages && <BtnSeparator onClick={this.handleLoadMoreClick} isLoadingComments={ isLoadingComments }>
          {isLoadingComments ? 'Loading...' : 'Load earlier messages'}
        </BtnSeparator>}
      </ActionCard.Header>
      {_messages && _messages.map((item, idx) =>
        <Comment
          key={idx}
          avatarUrl={item.author.photoURL}
          authorName={item.author.firstName + ' ' + item.author.lastName}
          date={moment(item.date).fromNow()}
          active={item.unread}
          self={item.author.userId === currentUser.userId}
        >
          <div dangerouslySetInnerHTML={{__html: item.content}} />
        </Comment>
      )}

      { allowAddingComment &&
        <AddComment
          className="messaging-comment-section"
          isAdding={isAddingComment}
          avatarUrl={currentUser.photoURL}
          authorName={ authorName }
          onAdd={onAddNewMessage}
          onChange={onNewMessageChange}
          content={newMessage}
        />
      }
    </ActionCard>
  )
  }
}

MessageDetails.propTypes = {
  /**
   * The thread title
   */
  title: PropTypes.string.isRequired,

  /**
   * The messages to display
   */
  messages: PropTypes.array.isRequired,

  /**
   * Callback fired when "Load earlier messages" is clicked
   *
   * function (
   *  SyntheticEvent event?
   * )
   */
  onLoadMoreMessages: PropTypes.func.isRequired,

  /**
   * The flag if "earlier messages" are loading
   */
  isLoading: PropTypes.bool,

  /**
   * The content of new added message
   */
  newMessage: PropTypes.string,

  /**
   * Callback fired when a new message is changed
   *
   * function (
   *  String message,
   *  SyntheticEvent event?
   * )
   */
  onNewMessageChange: PropTypes.func.isRequired,

  /**
   * Callback fired when a new message is added (confirmed)
   *
   * function (
   *  SyntheticEvent event?
   * )
   */
  onAddNewMessage: PropTypes.func.isRequired,

  /**
   * The current logged in user
   */
  currentUser: PropTypes.object.isRequired,

  /**
   * The flag if comment addition is in progress
   */
  isAddingComment: PropTypes.bool,

  /**
   * Flag to allow adding comments for the message
   */
  allowAddingComment: PropTypes.bool.isRequired
}

export default MessageDetails
