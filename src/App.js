import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <img alt = 'corner' src='../assets/corner-accent.png' className = "corner-left" />
      <img alt = 'corner' src='../assets/corner-accent.png' className = "corner-right" />
      <header className="App-header">
        <img alt = 'title' src='../assets/title-bg.png' className = "title" />
      </header>
      <div className='body'>
      <img alt = 'title' src='../assets/arrow-accent.png' className = "arrow-rotated" />
        <p className='about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo 
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate. 
            Voluptatum ducimus voluptates voluptas?</p>
        <img alt = 'title' src='../assets/arrow-accent.png' className = "arrow" />    
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sK_eSWy_sQ0" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe> 
      <img alt = 'title' src='../assets/footer-img.png' className = "fregio" />               
      <footer className='footer'>
        <SocialIcon url="https://www.youtube.com/channel/UC0tISnW4zwlY1abcOXvOuMg" />
        <SocialIcon url="https://www.twitter.com" />
        <SocialIcon url="https://www.instagram.com" />
      </footer>
    </div>
  );
}

export default App;
