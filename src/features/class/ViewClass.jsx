import React from 'react'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { FaBook, FaMedal } from 'react-icons/fa6'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import FormInput from '../../components/forms/FormInput'
import '../../styles/admin/viewClass.css';

function ViewClass() {
  return (
    <div className='view-class-div'>
      <div className="view-class-top">
        <AdminUpdates
          icon={<FaBook />}
          text={'Active Classes'}
          value={3}
         />
        <AdminUpdates
          icon={<FaBook />}
          text={'Students'}
          value={78}
         />
        <AdminUpdates
          icon={<FaMedal />}
          text={'Experience'}
          value={8}
         />
      </div>
      <div className="view-class-middle">
        <div className="student-form-content">
        <form action="">

          <div className="personal-info-div">
            <h3>Personal Information</h3>
              <div className="personal-info">
                <div className="info-content">
                  <FormInput type={'text'} placeholder={'Enter first name...'} inputID={'first-name'} label={'First Name'} />
                  <FormInput type={'text'} placeholder={'Enter last name...'} inputID={'last-name'} label={'Last Name'}/>
                </div>
                <div className="info-content">
                  <FormInput type={'date'} inputID={'date-of-birth'} label={'Date of Birth'}/>
                  <div className="select-info">

                    <label htmlFor="select-class">
                      Gender
                    </label>
                    <select name="" id="select-class">
                      <option value="" inert>select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="info-content">
                  <FormInput type={'text'} placeholder={'Enter email...'} inputID={'email-input'} label={'Email'} />
                  <FormInput type={'text'} placeholder={'+233 556 778 909'} inputID={'phone'} label={'Phone Number'} />
                </div>
              </div>
          </div>
          <div className="personal-info-div contact-info-div">
            <h3>Contact Information</h3>
              <div className="personal-info">
                <div className="info-content">
                  <FormInput type={'text'} placeholder={'Enter first name...'} inputID={'address'} label={'Address'} />
                  <FormInput type={'text'} placeholder={'Enter last name...'} inputID={'city'} label={'City'}/>
                  <FormInput type={'text'} placeholder={'Enter first name...'} inputID={'country'} label={'Country'}/>
                </div>
              </div>
          </div>
          <div className="personal-info-div academic-info-div">
            <h3>Academic Information</h3>
              <div className="academic-info">
                <div className="info-content">
                  <div className="select-info">

                    <label htmlFor="select-class">
                      Assign Class
                    </label>
                    <select name="" id="select-class">
                      <option value="Web 200">Web 200</option>
                      <option value="Web 200">Web 390</option>
                      <option value="Web 200">Web 700</option>
                    </select>
                  </div>
                  <FormInput type={'text'}  placeholder={'Enter last name...'} inputID={'date-enrolled'} label={'Enrollment Date'}/>
                  <FormInput type={'text'} inert={true} placeholder={'Auto-generated'} inputID={'student-id'} label={'Student ID'} />
                </div>
              </div>
          </div>
        </form>
      </div>
      <div className="view-class-bottom">
        <h2>Delete Teacher Profile</h2>
        <div>
          <p>Deleting the profile of a teacher cannot be undone once you approve.</p>
          <ButtonWithIcon buttonIcon={''} name={'Delete'} styles={{backgroundColor: 'transparent', border: '1px solid read', color: 'red'}}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ViewClass
