import logo from './logo.svg';
import React, { useState } from 'react';
import { renderPostPage } from './Pages/PostPage';
import { renderCreatePostPage } from './Pages/CreatePostPage';
import { renderAboutPage, renderOtherPage } from './Pages/AboutPage';
import './App.css';

//3 const variables that are used for keeping track of different states. Should be optimized into just numbers, but idk much about the Javascript Compiler
const STATE_POST_PAGE = 0;
const STATE_CREATE_POST_PAGE = 1;
const STATE_ABOUT_PAGE = 2;

//Entrypoint of the app
function App() {
  const [PageId, setPageId] = useState(STATE_POST_PAGE);
  return (
    <div>
      {createBanner(setPageId)}
      <div style={{ marginLeft: "15%" }}>
        {renderPage(PageId, setPageId)}
      </div>
    </div>
  )
}

//Function that returns the html for the banner, which is used for every page
//TODO: Find a better color and make this banner look better
function createBanner(setPageId) {
  return (
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <button style={{width: "100%"}} onClick={() => setPageId(STATE_POST_PAGE)} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">Dashboard</span>
            </button>
          </li>
          <li>
            <button style={{width: "100%"}} onClick={() => setPageId(STATE_CREATE_POST_PAGE)} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3 whitespace-nowrap">Create Post</span>
            </button>
          </li>
          <li>
            <button style={{width: "100%"}} onClick={() => setPageId(STATE_ABOUT_PAGE)} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3 whitespace-nowrap">About Us</span>
            </button>
          </li>
          <li>
            <button style={{width: "100%"}} onClick={() => setPageId(STATE_CREATE_POST_PAGE)} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3 whitespace-nowrap">Sign In</span>
            </button>
          </li>
          <li>
            <button style={{width: "100%"}} onClick={() => setPageId(STATE_CREATE_POST_PAGE)} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3 whitespace-nowrap">Sign Up</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

//Function that handles switching between pages, as well as passing any neccesary variables to those pages
function renderPage(PageID, setPageId) {
  if (PageID == STATE_POST_PAGE) {
    return renderPostPage();
  }
  if (PageID == STATE_CREATE_POST_PAGE) {
    return renderCreatePostPage();
  }
  if (PageID == STATE_ABOUT_PAGE) {
    return renderAboutPage();
  }
  return (
    <div>
      404 Page not Found
    </div>
  );
}

export default App;
