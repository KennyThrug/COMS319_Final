import logo from './logo.svg';
import React, {useState} from 'react';
import { renderPostPage } from './Pages/PostPage';
import { renderCreatePostPage } from './Pages/CreatePostPage';
import { renderOtherPage } from './Pages/OtherPage';
import './App.css';

//3 const variables that are used for keeping track of different states. Should be optimized into just numbers, but idk much about the Javascript Compiler
const STATE_POST_PAGE = 0;
const STATE_CREATE_POST_PAGE = 1;
const STATE_OTHER_PAGE = 2;

//Entrypoint of the app
function App() {
  const [PageId, setPageId] = useState(STATE_POST_PAGE);
  return (
    <div>
      {createBanner(setPageId)}
      <div style={{marginLeft: "20%"}}>
        {renderPage(PageId,setPageId)}
      </div>
    </div>
  )
}

//Function that returns the html for the banner, which is used for every page
//TODO: Find a better color and make this banner look better
function createBanner(setPageId){
  return (
    <div style={{position: 'fixed', width: '20%', height: "100%", border: 'solid', backgroundColor: "grey"}}>
      <button onClick={() => setPageId(STATE_POST_PAGE)}>
        Posts
      </button>
      <button onClick={() => setPageId(STATE_CREATE_POST_PAGE)}>
        Create Post
      </button>
      <button onClick={() => setPageId(STATE_OTHER_PAGE)}>
        Some Other Page
      </button>
    </div>
  );
}

//Function that handles switching between pages, as well as passing any neccesary variables to those pages
function renderPage(PageID,setPageId){
  if(PageID == STATE_POST_PAGE){
    return renderPostPage();
  }
  if(PageID == STATE_CREATE_POST_PAGE){
    return renderCreatePostPage();
  }
  if(PageID == STATE_OTHER_PAGE){
    return renderOtherPage();
  }
  return (
    <div>
      404 Page not Found
    </div>
  );
}

export default App;
