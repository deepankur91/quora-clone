import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './css/Post.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';

function Post() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const Close = <CloseIcon />;

  return (
    <div className='post'>
      <div className='post__info'>
        <Avatar />
        <h4>User Name</h4>
        <small>Time Stamp</small>
      </div>

      <div className='post__body'>
        <p>Who is the CEO of google?</p>
        <button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>Add Answer</button>

        <Modal
        open = {isModalOpen}
        CloseIcon = {Close}
        onClose = {() => setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick = {false}
        styles={{
          overlay:{
            height:"auto",
          }
        }}
        >
          <div className='modal__question'>
            <h2>Who is the CEO of google?</h2>
            <p>asked by <span className='name'>User Name</span> on <span className='name'>Timestamp</span></p>
          </div>
          <div className='modal__answer'>
            <ReactQuill placeholder='Type your answer here......'/>
          </div>
          <div className='modal__button'>
              <button className='cancel' onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type='submit' className='add'>
                Add Answer
              </button>
            </div>
        </Modal>
      </div>

      <div className='post__footer'>
        <div className='post__footerAction'>
            <ArrowUpwardIcon />
            <ArrowDownwardIcon />
        </div>
         <ChatBubbleOutlineOutlinedIcon />
         <LoopRoundedIcon />
         <div className='post__footerLeft'>
          <MoreHorizIcon />
         </div>
      </div>
      <p>1 Answer</p>

      <div className='post__answer'>
        <div className='post-answer-container'>
          <div className='post-answered'>
            <Avatar />
              <div className='post-info'>
                <p>
                  Username
                </p>
                <span>Timestamp</span>
              </div>
          </div>
          <div className='post-answer'>The CEO of google is Sundar Pichai.</div>
        </div>
      </div>
    </div>
  )
}

export default Post
