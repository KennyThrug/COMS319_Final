import logo from './logo.svg';
import React, { useState } from 'react';
import { renderAllPostPage, renderComments, renderImage, renderSinglePost, renderSinglePostFromArray } from './Pages/PostPage';
import { renderCreatePostPage } from './Pages/CreatePostPage';
import { renderAboutPage, renderOtherPage } from './Pages/AboutPage';
import { createSideBanner, createTopBanner } from './banners';
import { renderLoginPage } from './Pages/LoginPage';
import { renderEditPostPage } from './Pages/EditPostPage';
import { renderDeletePostPage } from './Pages/DeletePostPage';
import { getMethod } from './FrontendAPI';
import './App.css';

//3 const variables that are used for keeping track of different states. Should be optimized into just numbers, but idk much about the Javascript Compiler
export const STATE_POST_PAGE = 0;
export const STATE_CREATE_POST_PAGE = 1;
export const STATE_ABOUT_PAGE = 2;
export const STATE_LOGIN_PAGE = 3;
export const STATE_SINGLE_POST = 4;
export const STATE_EDIT_POST_PAGE = 5;
export const STATE_DELETE_POST_PAGE = 6;

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
  //Determines current post pictures

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
        {renderPage(PageId, Posts, PostIndex,Preview,setPreview,Posts,setPosts)}
      </div>
    </div>
  )

}

//Function that handles switching between pages, as well as passing any neccesary variables to those pages
function renderPage(PageID, posts, PostIndex,Preview,setPreview,Posts, setPosts) {
  if (PageID == STATE_POST_PAGE) {
    return renderAllPostPage(posts);
  }
  if (PageID == STATE_CREATE_POST_PAGE) {
    return renderCreatePostPage(Preview,setPreview,Posts, setPosts);
  }
  if (PageID == STATE_ABOUT_PAGE) {
    return renderAboutPage();
  }
  if (PageID == STATE_LOGIN_PAGE) {
    return renderLoginPage();
  }
  if (PageID == STATE_SINGLE_POST) {
    return (<div>
      {renderSinglePostFromArray(posts, PostIndex)}
      {/* {renderImage()} */}
      {renderComments(posts,PostIndex)}
      </div>);
  }
  if(PageID == STATE_EDIT_POST_PAGE)
  {
    return renderEditPostPage(posts, setPosts);
  }
  if(PageID == STATE_DELETE_POST_PAGE)
  {
    return renderDeletePostPage(posts, setPosts);
  }
  return (
    <div>
      404 Page not Found
    </div>
  );
}

export default App;
