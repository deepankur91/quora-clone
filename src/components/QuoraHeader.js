import logo from './images/Quora-Logo.png';
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
// import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
// import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import { Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './css/QuoraHeader.css';
import Modal from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css'
import { ExpandMore } from '@mui/icons-material';
import LogIn from './LogIn';


function QuoraHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const Close = <CloseIcon />;
  return (
    <div className='qHeader'>
        <div className='qHeader-content'>
          <div className='qHeader__logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='qHeader__icons'>
            <div className='qHeader__icon'><HomeIcon /></div>
            {/* <div className='qHeader__icon'><FeaturedPlayListOutlinedIcon /></div>
            <div className='qHeader__icon'><AssignmentTurnedInOutlinedIcon /></div>
            <div className='qHeader__icon'><PeopleAltOutlinedIcon /></div>
            <div className='qHeader__icon'><NotificationsOffOutlinedIcon /></div> */}
          </div>
          <div className='qHeader__input'>
            <SearchIcon />
            <input type='text' placeholder='Search Question'/>
          </div>
          <div className='qHeader__Rem'>
            <Avatar />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
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
            <div className='modal__title'>
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className='modal__info'>
              <Avatar className='avatar'/>
              <div className='modal__scop'>
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className='modal__field'>
              <h4>Question</h4>
              <input type= 'text' placeholder='Type your question here..........'/>
            </div>
            <div className='modal__button'>
              <Button className='cancel' onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type='submit' className='add'>
                Add Question
              </Button>
            </div>
          </Modal>

          <div>
            <LogIn />
            <p>LogIn</p>
          </div>
        </div>
    </div>
  )
}

export default QuoraHeader
