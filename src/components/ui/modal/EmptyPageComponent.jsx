import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import EmptyPageImage from '../../../assets/notification.png'

function EmptyPageComponent({ emptyPageTitle, emptyPageButtonTitle, EmptyPageImageText}) {
  return (
    <div className='empty-page-component-div'>
      <div className="admin-student-top-content empty-page-component">
        <div className="top-content-text">
          <h1>{emptyPageTitle}</h1>
          <div className="student-content">
            <p>Review, filter and manage training college enrollments.</p>
          </div>
        </div>
        <div className="add-student-btn">
          <ButtonWithIcon name={`${emptyPageButtonTitle}`} buttonIcon={<PiPlus />}/>
        </div>
      </div>
      <div className="empty-wrapper">

        <div className="empty-page-image-div">
          <img src={EmptyPageImage} alt="Nothing Here" className='empty-page-image' />
          <div className="empty-page-text">
            <h2>No {EmptyPageImageText} at this time</h2>
            <p>{EmptyPageImageText} will appear here after you add them  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyPageComponent
