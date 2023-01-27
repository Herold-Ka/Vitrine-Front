import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='divNavBar'>
        <div className='navBarMain'>
            <div className='navBarLeft'>
                <Link to='Home' className='navBarLink'><img src="./img/Violet Moderne Technologie et Gaming Logo.png" alt="" /></Link>
                <Link to='Shop' className='navBarLink'>Shop</Link>
            </div>
            <div className='navBarRight'>
                <Link to='Join' className='navBarLink'>Join</Link>
                <div className='navBarSelect'>
                    <p>Explore</p>
                    <ul className='navBarExplore'>
                        <li><Link to='LicenceFree' className='navBarLink'>LicenceFree</Link></li>
                        <li><Link to='Artiste' className='navBarLink'>Artiste</Link></li>
                        <li><Link to='Popular' className='navBarLink'>Populaire</Link></li>
                    </ul>
                </div>
                <Link to='Forum' className='navBarLink'>Forum</Link>
                <Link to='Panel' className='navBarLink'> Panel </Link>
                <Link to='SignIn' className='navBarLink'id='navBarSignIn'> SignIn</Link>
            </div>
        </div>
        <div className="navBarSearch">
            <p>Les plus belles photos, Images pour vos créations</p>
            <input type="text" placeholder='Search...'/>
        </div>
    </div>
  )
}

export default NavBar