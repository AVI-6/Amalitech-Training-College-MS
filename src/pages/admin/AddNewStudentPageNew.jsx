import React from 'react'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import FormInput from '../../components/forms/FormInput'
import Button from '../../components/buttons/Button'
import WhiteButton from '../../components/buttons/WhiteButton'
import '../../styles/admin/addNewStudentPage.css'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import AdminPageHeader from '../../components/admin/AdminPageHeader'

function AddNewStudentPage() {
  const navigate = useNavigate()

  function handleAddStudent(){
    navigate('/admin/students/')
  }
  return (
    <div className='add-new-student-page-div'>
      <div className="new-student-top-content">
        <AdminPageHeader 
          title={'Add New Student Now'}
          subtitle={'Fill out the form to add new student'}
          backTo={()=> window.history.back()}
        />
      </div>
      <div className="student-form-content">
        <form action="">

          <div className="personal-info-div margin">
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
                    <select  name="" id="select-class">
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
          <div className="save-new-student">
            <Button btnType={'submit'} name={'Add Student'} />
            <WhiteButton name={'Cancel'} onClick={handleAddStudent}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewStudentPage
