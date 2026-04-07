import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import { BsPlus } from 'react-icons/bs'

function QuickAction() {
  return (
    <div className='quick-actions'>
      <div className="quick-actions-title">Quick Action</div>
      <div className="quick-actions-btns">
        <div className='quick-actions-btns-div'>
          <ButtonWithIcon name={'Add Student'} buttonIcon={<BsPlus className='quick-actions-icon'/>}/>
        </div>
        <div className="quick-actions-btns-div">
          <ButtonWithIcon name={'Add Staff'} buttonIcon={<BsPlus className='quick-actions-icon'/>}/>
        </div>
        <div className="quick-actions-btns-div">
          <ButtonWithIcon name={'Add Course'} buttonIcon={<BsPlus className='quick-actions-icon'/>}/>
        </div>
      </div>
    </div>
  )
}

export default QuickAction
