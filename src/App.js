import logo from './logo.svg';
import React, { useState } from 'react';
import { renderAllPostPage, renderSinglePost, renderSinglePostFromArray } from './Pages/PostPage';
import { renderCreatePostPage } from './Pages/CreatePostPage';
import { renderAboutPage, renderOtherPage } from './Pages/AboutPage';
import { createSideBanner, createTopBanner } from './banners';
import { renderLoginPage } from './Pages/LoginPage';
import './App.css';

//3 const variables that are used for keeping track of different states. Should be optimized into just numbers, but idk much about the Javascript Compiler
export const STATE_POST_PAGE = 0;
export const STATE_CREATE_POST_PAGE = 1;
export const STATE_ABOUT_PAGE = 2;
export const STATE_LOGIN_PAGE = 3;
export const STATE_SINGLE_POST = 4;

function getMethod(Posts, setPosts) {
  fetch("http://localhost:8081/getAllPosts")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
      console.log(Posts);
    });
}

//Entrypoint of the app
function App() {
  //PageID determines what page you are currently on
  const [PageId, setPageId] = useState(STATE_POST_PAGE);
  //PostID determines what post you are currently looking at, always updated at the same time as changing a page (see side banner)
  const [PostIndex, setPostIndex] = useState(0);
  //This is only used on the "Create Post" page, and should be ignored otherwise
  const [Preview, setPreview] = useState((
    <div>
        Error: This should Never be visible
    </div>
));

  const [Posts, setPosts] = useState([]);

  React.useEffect(() =>
  {
    getMethod(Posts, setPosts);
  },[]);

  
  return (
    <div>
      {createSideBanner(setPageId, Posts, setPostIndex)}
      {createTopBanner(setPageId)}
      <br></br><br></br><br></br><br></br>
      <div style={{ marginLeft: "15%" }}>
        {renderPage(PageId, Posts, PostIndex,Preview,setPreview)}
      </div>
    </div>
  )

}

//Function that handles switching between pages, as well as passing any neccesary variables to those pages
function renderPage(PageID, posts, PostIndex,Preview,setPreview) {
  if (PageID == STATE_POST_PAGE) {
    return renderAllPostPage(posts);
  }
  if (PageID == STATE_CREATE_POST_PAGE) {
    return renderCreatePostPage(Preview,setPreview);
  }
  if (PageID == STATE_ABOUT_PAGE) {
    return renderAboutPage();
  }
  if (PageID == STATE_LOGIN_PAGE) {
    return renderLoginPage();
  }
  if (PageID == STATE_SINGLE_POST) {
    return renderSinglePostFromArray(posts, PostIndex);
  }
  return (
    <div>
      404 Page not Found
    </div>
  );
}

export default App;
