import React from "react";
import './Post.css'

const Post = () => {


    return (
    <>
      <div className="form">
        <h2>Please Add your video </h2>
        <form typeof="submit" action="https://tik-tok-b.onrender.com/posts" method="post">
          <label>Url</label>
          <input type="text" name="Url"></input>
          <label>likes</label>
          <input type="number" name="likes"></input>
          <label>shares</label>
          <input type="number" name="shares"></input>
          <label>channel</label>
          <input type="text" name="channel"></input>
          <label>song</label>
          <input type="text" name="song"></input>
          <label>description</label>
          <input type="text" name="description"></input>
          <br></br>
          <button type="submit" onClick={()=> {
            alert('Data submitted successfully!');
          }}>Submit</button>
        </form>
        
      </div> 
    </>
    )
}

export default Post;
 