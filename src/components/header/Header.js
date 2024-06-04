import React from 'react';
import linkedin from './../../assests/LinkedIn_icon.png';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOptions from './HeaderOptions';
import me from './../../assests/me.jpg';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={linkedin} />
            <div className='search'>
                <SearchIcon className='searchIcon'/>
                <input type='text' className='searchInput' placeholder='Search'/>
            </div>
        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title='Home'/>
            <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOptions Icon={ChatIcon} title='Messaging'/>
            <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOptions avatar={me} title='me'/>
        </div>
    </div>
  )
}

export default Header
