import React from 'react';
import AddComment from './AddComment.jsx';
import CommentsEntry from './CommentsEntry.jsx';

const Comments = ({champion, enemy, comments, matchup}) => {

  return (
    <div className="CommentsContainer">
      {comments && <AddComment champion={champion} enemy={enemy} update={matchup} />}
      <div className="CommentsList">
        {/* <CommentsEntry comment={{name: 'Cassiel', comment: 'this is a test comment', icon: 4532, championLevel: 7, championPoints: 290000}} /> */}
        {Array.isArray(comments) && comments.length === 0 && <div className="NoComments">No comments yet, be the first one!</div>}
        {comments && comments.map(comment => (
          <CommentsEntry key={comment._id} comment={comment}/>
        ))}
      </div>
    </div>
  );
}

export default Comments;