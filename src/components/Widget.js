import React from 'react'
import WidgetContent from './WidgetContent'
import './css/widget.css';

function Widget() {
  return (
    <div className='widget'>
      <div className='widget__header'>
        <h5>Advertisement</h5>
      </div>
      <div className='widget__contents'>
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widget
