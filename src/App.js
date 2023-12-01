import logo from './logo.svg';
import React, { useState } from 'react';
import { renderAllPostPage, renderSinglePost } from './Pages/PostPage';
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

//Entrypoint of the app
function App() {
  //PageID determines what page you are currently on
  const [PageId, setPageId] = useState(STATE_POST_PAGE);
  //PostID determines what post you are currently looking at, always updated at the same time as changing a page (see side banner)
  const [PostIndex, setPostIndex] = useState(0);
  //Change to a get from the database API
  let posts = placeholder_posts();
  return (
    <div>
      {createSideBanner(setPageId, posts, setPostIndex)}
      {createTopBanner(setPageId)}
      <br></br><br></br><br></br><br></br>
      <div style={{ marginLeft: "15%" }}>
        {renderPage(PageId, posts, PostIndex)}
      </div>
    </div>
  )

}

//Function that handles switching between pages, as well as passing any neccesary variables to those pages
function renderPage(PageID, posts, PostIndex) {
  if (PageID == STATE_POST_PAGE) {
    return renderAllPostPage(posts);
  }
  if (PageID == STATE_CREATE_POST_PAGE) {
    return renderCreatePostPage();
  }
  if (PageID == STATE_ABOUT_PAGE) {
    return renderAboutPage();
  }
  if (PageID == STATE_LOGIN_PAGE) {
    return renderLoginPage();
  }
  if (PageID == STATE_SINGLE_POST) {
    return renderSinglePost(posts, PostIndex);
  }
  return (
    <div>
      404 Page not Found
    </div>
  );
}

let dark_mode = false;
function switch_dark_mode(DarkMode, setDarkMode) {
  dark_mode = !dark_mode;
  document.body.style = `background: ${dark_mode ? 'white;' : 'grey;'}`
}

//This needs to be deleted before deployment
function placeholder_posts() {
  return [
    {
      id: 0,
      postTitle: "Placeholder #1",
      author: "Some Guy",
      date: "December 1st, 2023",
      date_published: "September 1, 2020",
      genres: [
        "Fantasy",
      ],
      tags: [
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
      id: 1,
      postTitle: "Placeholder #2",
      author: "Some other Guy",
      date: "December 1st, 2023",
      date_published: "August 9th, 2000",
      genres: [
        "Romance",
      ],
      tags: [
        "TestPost",
      ],
      postContents: (
        <div>
          This is a second post, which should show up
          <img style={{ float: "left" }} src="https://robohash.org/Ked"></img>
          That was an Inline Image, It seems to work
        </div>
      )
    },
    {
      id: 2,
      postTitle: "Mario 64",
      author: "Nintendo",
      date: "Oct 17, 2023",
      date_published: "September 29, 1996",
      genres: [
        "Platformer"
      ],
      tags: [
        "Video Game"
      ],
      postContents: (
        <div>
          Okay, so I didn't really grow up on this game or anything, I was always a playstation kid, so I didn't play this until a couple years ago, but straight up, I've played way worse. I tried playing it a couple years back, but I played it on my Wii Virtual Console, and the controls were super slippery, which is a well known issue with the wii n64 emulator, so I decided to pick up the real game when I came into possesion of an actual N64. Nope. Its just as slippery as it was on the wii, just now with a weird 3 handed controller.<br></br><br></br>Anyways, the game itself is really good, in the first few levels. But doing any sort of precision platforming is so god awful, mainly because for some reason Mario turns weirdly. From what I can tell, he either snaps in the direction of your stick, or he loops around in a circle, and I cannot for the life of me figure out what decides what one to do. Thats probably my number 1 complaint about the game.<br></br><br></br>Best level is by far, the first few, just that whole first floor is spectactacular. Worst is by far Rainbow ride, specifically the 100 coin star, which was my last star. As a sidenote, I still don't know if I know how the snowmans head rolls.
        </div>
      )
    },
    {
      id: 3,
      postTitle: "Beowulf",
      author: "Cotton Vitellius",
      date: "Oct 13 2023",
      date_published: "1815",
      genres: [
        "Classic",
        "Epic",
        "Fantasy",
        "Fiction"
      ],
      tags: [
        "Old ass-Book"
      ],
      postContents: (
        <div>
          This Book was quite boring for most of it. Beowulf isn't a particularly interesting protagonist, and the antagonists weren't too interesting. The version I read back in high school was written in Old English, which was probably the most interesting thing about the book, as it showed the evolution of language. No one is actually gonna read a review of Beowulf, so I'm just gonna start Tangenting about stuff. Theres a big part of me that actually wants to get a minor in Linguistics because of the coolness of the evolution of language. I took Latin back in high school, and actually ended up at pretty much the top of my class, and learned quite a lot. Although useless to speak, Latin is a really cool language in a historical context, as it is the root language for many languages, and although English is not a Romantic Language (it is instead Germanic, all you have to do is read Beowulf to discover that, its practically in German) Its still quite interesting to see many of the influences of latin in the english language, many of which can be attributed to the Church<br></br><br></br> There are three major parts to this story. The first is A battle against Grendel. Grendel is a decendant of Cain, and thus is an Ogre like creature. This is probably the most boring fight, as it is a bit of a Curbstomp in favor of Beowulf. He literraly tears this man apart with his arms. Ouch.<br></br><br></br>The Second battle is against Grendels Mother. Something interesting about this story is the existence of a named weapon, Hrunting, which is the sword he uses to slay the Mother. Its cool seeing something that would be a common mainstay in media in the 21st century so long ago, the idea of a powerful, legendary, named sword. I believe Excalaber came before Beowulf, however its still cool. I really don't have much to say tbh.<br></br><br></br>The Final battle is against the Dragon. As an advid DnD fan, I love dragons, and so should you. Unfortunetly the dragon and beowulf kill each other. Wiglaf witnesses his death, but honestly neither character was interesting enough to care.<br></br><br></br>I really don't know why when I was like "I need to make a review of something to take up space on the page" I decided on Beowulf? Like wtf dude, I read this in high school, its more than half a decade at this point since I read it, and I didn't even like it??? Whatever I guess this is going on the page since I just spent 15 minutes writing this.<br></br><br></br>Image Obtained from Wikimedia Commons
        </div>
      )
    },
    {
      id: 4,
      postTitle: "Spiderman (PS4)",
      author: "Insomniac Games",
      date: "Oct 17 2023",
      date_published: "September 7, 2018",
      genres: [
        "Video Game",
        "Superhero",
        "Open World"
      ],
      tags: [
        "Video Game"
      ],
      postContents: (
        <div>
          This was originally supposed to be a book review blog, however, I, Kenny, don't read many books, so I'm not crazy familiar with most books, but I'm super familiar with Video Games... Yeah I know a computer Science Student who likes Video Games, real original.<br></br><br></br>Anyway's the game. Its Spiderman PS4, it really is spectacular, amazing, and other adjectives. If you haven't played it, you really should. The Webslinging is amazing and I love to just play this to swing around all day. The story is spectacular and made me cry like 3 times. The dodging system is so satisfying every single time. But in the end, Its just a spectacular game everyone should play.
        </div>
      )
    }
  ]
}

export default App;
