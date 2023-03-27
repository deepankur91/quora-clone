import React from 'react'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import CreateIcon from '@mui/icons-material/Create';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import './css/QuoraBoxQAP.css'

function QuoraBoxQAP() {
  return (
    <div className='quoraQAP'>
      <div className='quoraQAP__icons'>
        <div className='quoraQAP__icons__question'>
            <div className='quoraQAP__icon'><LiveHelpOutlinedIcon /></div>
            <p>Question</p>
        </div>

        <div className='quoraQAP__icons__answer'>
            <div className='quoraQAP__icon'><CreateIcon /></div>
            <p>Answer</p>
        </div>

        <div className='quoraQAP__icons__post'>
            <div className='quoraQAP__icon'><PostAddOutlinedIcon /></div>
            <p>Post</p>
        </div>

        
     </div>  
    </div>
  )
}

export default QuoraBoxQAP
