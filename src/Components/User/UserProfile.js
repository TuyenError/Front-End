import React from 'react'

import { useParams } from 'react-router-dom'

import Header from '../Home/Header'
import Footer from '../Home/Footer'

import SingleBanner from '../Banners/SingleBanner'

import './UserProfile.css'
import UserSliderbar from '../UserProfile/UserSliderbar'
import AccountSettings from '../UserProfile/AccountSettings'
const UserProfile = () => {
  const {activepage} = useParams ()

  return (
    
    <div className='userprofile'>

      <Header/>
      <SingleBanner
      heading ={'My Profile'}
      bannerImage='https://statics.vincom.com.vn/xu-huong/chi_tiet_xu_huong/1/14-4/3/do-an-nhanh-cho-nguoi-ban-ron.jpg'
     />

      {/* UserProfile, show {activepage} */}
      <div className='userprofilein'>
        <div className='left'>
          <UserSliderbar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings/>}
        </div>

      </div>
      {/* <Footer/> */}

    </div>
  )
}

export default UserProfile