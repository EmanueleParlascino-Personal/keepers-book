import './App.css';
import React from 'react';
import Delayed from './Delayed';
import ImageGallery from 'react-image-gallery';
import { SocialIcon } from 'react-social-icons';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function App() {
  return (
    <div className="App">
      <div className='fadeinLayer'>
        <img alt = 'corner' src='../assets/corner-accent.png' className = "corner-left" />
        <img alt = 'corner' src='../assets/corner-accent.png' className = "corner-right" />
        <img alt = 'title' src='../assets/title-bg.png' className = "title" />
        <div className='body'>
          <img alt = 'title' src='../assets/arrow-accent.png' className = "arrow-rotated" />
          <div className='about-block'>
            <p className='about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo 
                reprehenderit optio amet ab temporibus asperiores quasi cupiditate. 
                Voluptatum ducimus voluptates voluptas?</p>    
          </div>   
          <img alt = 'title' src='../assets/arrow-accent.png' className = "arrow" />    
        </div>
        <img alt = 'signature' src='../assets/signature-round.png' className = "signature" />
        <Delayed waitBeforeShow = {100}>
          <div className='comefrombelow'>
            
            <ImageGallery items={images} /> 
          
            <iframe src="https://store.steampowered.com/widget/423230/?t=Keeper's%20book%20description" frameborder="0" width="646" height="190" title = "steamWishlist"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sK_eSWy_sQ0" 
                          title="YouTube video player" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe> 
            <img alt = 'title' src='../assets/footer-img.png' className = "fregio" />
            
          </div>               
          <footer className='footer'>
            <div className='social-item'>
              <SocialIcon url="https://www.youtube.com/channel/UC0tISnW4zwlY1abcOXvOuMg" />
            </div>
            <div className='social-item'>
              <SocialIcon url="https://www.twitter.com" />
            </div>
            <div className='social-item'>
              <SocialIcon url="https://www.instagram.com" />
            </div>
          </footer>
        </Delayed>
      </div>
    </div>
  );
}

export default App;
/* 
todo

photogallery under video (horizontal scrolling)

*/