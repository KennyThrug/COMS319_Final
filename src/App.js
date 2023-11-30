import logo from './logo.svg';
import React, { useState } from 'react';
import { renderPostPage } from './Pages/PostPage';
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

//Entrypoint of the app
function App() {
  const [PageId, setPageId] = useState(STATE_POST_PAGE);
  const [DarkMode, setDarkMode] = useState(true);
  let posts = placeholder_posts();
  return (
    <div>
      {createSideBanner(setPageId,posts)}
      {createTopBanner(setPageId)}
      <div style={{ marginLeft: "15%" }}>
        {renderPage(PageId, setPageId,DarkMode,posts)}
      </div>
    </div>
  )

}

//Function that handles switching between pages, as well as passing any neccesary variables to those pages
function renderPage(PageID, setPageId,DarkMode,posts) {
  if (PageID == STATE_POST_PAGE) {
    return renderPostPage(posts);
  }
  if (PageID == STATE_CREATE_POST_PAGE) {
    return renderCreatePostPage();
  }
  if (PageID == STATE_ABOUT_PAGE) {
    return renderAboutPage();
  }
  if (PageID == STATE_LOGIN_PAGE){
    return renderLoginPage();
  }
  return (
    <div>
      404 Page not Found
    </div>
  );
}

let dark_mode = false;
function switch_dark_mode(DarkMode,setDarkMode){
  dark_mode = !dark_mode;
  document.body.style = `background: ${dark_mode ? 'white;' : 'grey;'}`
}

//This needs to be deleted before deployment
function placeholder_posts() {
  return [
      {
          id: 0,
          postTitle: "Placeholder Post Title",
          tags: [
              "Fantasy",
              "TestPost",
              "Dragons"
          ],
          postContents: (
              <div>
                  This is a post that is really long, and is not actually real. I don't know what to do here. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  <img src="https://robohash.org/Kenny"></img>
                  That was an Inline Image, I hope it works  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </div>
          )
      },
      {
          id: 0,
          postTitle: "Placeholder Post Title",
          tags: [
              "Fantasy",
              "TestPost",
              "Dragons"
          ],
          postContents: (
              <div>
                  This is a second post, which should show up
                  <img style={{ float: "left" }} src="https://robohash.org/Ked"></img>
                  That was an Inline Image, It seems to work
              </div>
          )
      },
  ]
}

export default App;
