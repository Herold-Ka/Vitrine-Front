import React from 'react'
import './NavBarType.css'

const NavBarType = () => {
  return (
    <div className='divNavBarType'>
      <div className="textNavBarType">
        <p>Export Topics</p>
        <p>View All</p>
      </div>
      <div className="topicsCard">
        <button className='homeAIButton'>AI Art</button>
        <button className='homeFanArtButton'>Fan Art</button>
        <button className='homePhotographyButton'>Photography</button>
        <button className='homeFantaisyButton'>Fantasy</button>
        <button className='homeAMButton'>Anime & Manga</button>
        <button className='homeComicsButton'>Comics</button>
        <button>Ressources</button>
      </div>
    </div>
  )
}

export default NavBarType