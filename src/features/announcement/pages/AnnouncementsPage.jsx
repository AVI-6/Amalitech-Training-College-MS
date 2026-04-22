import React from 'react'
import AdminPageHeader from '../../../components/admin/AdminPageHeader'
import { FaMessage } from 'react-icons/fa6'
import InputForForm from '../../../components/forms/InputForForm'
import TextAreaForForm from '../../../components/forms/TextAreaForForm'
import ButtonWithIcon from '../../../components/buttons/ButtonWithIcon'
import WhiteButton from '../../../components/buttons/WhiteButton'
import '../../../styles/teachers/postAnnouncement.css'
import { FiMessageSquare } from 'react-icons/fi'

function AnnouncementsPage() {
  return (
    <div className='announcement-page-div'>
      <div className="annoucement-page-header">
        <AdminPageHeader title={'Post Announcement'} backTo={'/teachers/dashboard'} />
      </div>
      <div className="annoucement-page-footer">
        <div className="announcement-footer-wrapper">
          <div className="announcement-page-footer-head">
            <div className="icon-text">
              <FiMessageSquare className='announcement-image'/>
              <b>Announcement Details</b>
            </div>
          </div>
          <div className="announcement-page-footer-bottom">
            <InputForForm title={'Priority'} placeholder={''}/>
            <InputForForm title={'Title '}placeholder={'eg. Class cancelled on Friday'} />
            <TextAreaForForm assessmentDesc={'Message *'} placeholder={'Enter announcement message'}/>
            <div className="announcement-note">
              <b>Note:</b>
              <small>All students in class will receive the announcement via email and in-app notification</small>
            </div>
          </div>
        </div>
        <div className="post-announcement-btn-div">
          <ButtonWithIcon name={'Post Announcement'} />
          <WhiteButton name={'Cancel'} />
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsPage
