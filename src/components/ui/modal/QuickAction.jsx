import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import { BsPlus } from 'react-icons/bs'

function QuickAction({onClickClass, onClickStudent, onClickTeacher}) {
  return (
    <div className='quick-actions'>
      <div className="quick-actions-title">Quick Action</div>
      <div className="quick-actions-btns">
        <div className='quick-actions-btns-div'>
          <ButtonWithIcon onClick={onClickStudent} name={'Add Student'} buttonIcon={<BsPlus className='quick-actions-icon'/>}/>
        </div>
        <div className="quick-actions-btns-div">
          <ButtonWithIcon onClick={onClickTeacher} name={'Add Teacher'} buttonIcon={<BsPlus className='quick-actions-icon'/>}/>
        </div>
        <div className="quick-actions-btns-div">
          <ButtonWithIcon onClick={onClickClass} name={'Add Course'} buttonIcon={<BsPlus className='quick-actions-icon'/>}/>
        </div>
      </div>
    </div>
  )
}

export default QuickAction
