import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../Home/Footer'
import Header from '../Home/Header'
import SingleBanner from '../Banners/SingleBanner'
import UserSidebar from '../UserProfile/UserSidebar'
import './UserProfile.css'
import AccountSettings from '../UserProfile/AccountSettings';
const UserProfile = () => {
  const {activepage} = useParams()
  // alert (activepage)
  return (
    <div className='userprofile'>
      {/* <Navbar/> */}
       <Header/>
       < SingleBanner heading ={'My Profile'} 
       bannerImage ='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
       />
      {activepage}
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings/>}
        </div>
      </div>
      <Footer/>
  
      </div>
  )
}

export default UserProfile