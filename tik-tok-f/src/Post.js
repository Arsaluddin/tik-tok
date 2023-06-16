import React from "react";

const Post = () => {


    return (
    <>
      <div className="form">
        <h2>Please Add your video </h2>
        <form action="/posts" method="post">
          <label>Url</label>
          <input name="Url"></input>
          <label>likes</label>
          <input name="likes"></input>
          <label>shares</label>
          <input name="shares"></input>
          <label>channel</label>
          <input name="channel"></input>
          <label>song</label>
          <input name="song"></input>
          <label>description</label>
          <input name="description"></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        
      </div> 
    </>
    )
}

export default Post;