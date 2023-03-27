import { Avatar } from '@mui/material'
import React from 'react'
import './css/QuoraBox.css';
import QuoraBoxQAP from './QuoraBoxQAP';

function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox1'>
          <div className='quoraBox__info'>
            <Avatar />
          </div>
          <div className='quoraBox__quora'>
            <p>What do you want to ask or share?</p>
          </div>
        </div>
        <div><QuoraBoxQAP /></div>
    </div>
  )
}

export default QuoraBox
