import logo from './logo.svg';
import React, {useState} from 'react';
import { renderPostPage } from './PostPage';
import { renderCreatePostPage } from './CreatePostPage';
import { renderOtherPage } from './OtherPage';
import './App.css';

const STATE_POST_PAGE = 0;
const STATE_CREATE_POST_PAGE = 1;
const STATE_OTHER_PAGE = 2;
function App() {
  const [PageId, setPageId] = useState(STATE_POST_PAGE);
  return (
    <div>
      {createBanner(setPageId)}
      {renderPage(PageId,setPageId)}
    </div>
  )
}

function createBanner(setPageId){
  return (
    <div>
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
