import React from 'react';
import './HeaderOptions.css'
import { Avatar } from '@mui/material';

function HeaderOptions({avatar, title, Icon}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOptionIcon' />} 
        {avatar && <Avatar className='headerOptionIcon' src={avatar}/>}
        <h3 className='headerOptionTitle'>{title}</h3>
    </div>
  )
}

export default HeaderOptions;
