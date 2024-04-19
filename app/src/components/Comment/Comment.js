import React, { useState } from "react";
import "./Comment.css";

const Comment = () => {
  const [likes, setLikes] = useState(0);
  const [loves, setLoves] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleLove = () => {
    setLoves(loves + 1);
  };

  const handleComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const imageData = [
    {
      id: 1,
      image: "image1.jpg",
      description: "Beautiful sunset at the beach",
    },
    {
      id: 2,
      image: "image2.jpg",
      description: "Enchanting forest in the morning",
    },
    // Add more image data objects as needed
  ];

  return (
    <div className="comment-container">
      <div className="reaction-buttons">
        <button onClick={handleLike}>
          <i className="fas fa-thumbs-up"></i> <span>{likes}</span>
        </button>
        <button onClick={handleLove}>
          <i className="fas fa-heart"></i> <span>{loves}</span>
        </button>
      </div>
      <div className="comment-section">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleComment}>Post</button>
      </div>
      <div className="image-cards">
        {imageData.map((data) => (
          <div className="card" key={data.id}>
            <div className="card-image">
              <img src={data.image} alt={data.description} />
            </div>
            <div className="card-details">
              <p>{data.description}</p>
              <div className="card-reactions">
                <button onClick={handleLike}>
                  <i className="fas fa-thumbs-up"></i> Like
                </button>
                <button onClick={handleLove}>
                  <i className="fas fa-heart"></i> Love
                </button>
              </div>
              <div className="card-comments">
                {comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </div>
              <div className="add-comment">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleComment}>Post</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
