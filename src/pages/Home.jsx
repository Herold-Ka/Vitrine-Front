import React from 'react'
import FirstCard from '../components/home/FirstCard'
import NavBarType from '../components/home/NavBarType'
import SecondCard from '../components/home/SecondCard'
import './Home.css'

const Home = () => {
  return (
    <div className='divHome'>
        <FirstCard/>
        <NavBarType/>
        <SecondCard/>
    </div>
  )
}

export default Home