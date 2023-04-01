import React, { useState } from 'react'
import './css/Post.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function AddAnswer() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const Close = <CloseIcon />;
  return (
    <div>
       <Button onClick={() => setIsModalOpen(true)}>Add Answer</Button>
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
          <div className='modal__button'></div>
            <div className='modal__button'>
              <Button className='cancel' onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type='submit' className='add'>
                Submit
              </Button>
            </div>
          </Modal>
    </div>
  )
}

export default AddAnswer
