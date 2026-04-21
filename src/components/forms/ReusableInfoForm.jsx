import React from 'react'
// import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import Button from '../buttons/Button'
import WhiteButton from '../buttons/WhiteButton'

function ReusableInfoForm({form, handleCancel, handleChange, handleSubmit, name}) {
  // const navigate = useNavigate()
  // const [form, setForm] = React.useState([{
  //   firstName: '',
  //   lastName: '', 
  //   dateofBirth: '',
  //   gender: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   city: '',
  //   country: '',
  //   subSpecialization: '',
  //   enrolledDate: '', 
  //   highestQualification: '',
  //   yearofExperience: '',
  //   assignedCLass: ''
  // }])

  // function handleAddTeacher(){
  //   navigate('/admin/Teachers/')
  // }

  // function handleSubmit(e){
  //   e.preventDefault()
  // }
  return (
    <div className='reusable-form-div'>
      <div className="student-form-content">
        <form onSubmit={handleSubmit}>

          <div className="personal-info-div margin">
            <h3>Personal Information</h3>
              <div className="personal-info">
                <div className="info-content">
                  <FormInput
                    type={'text'} 
                    placeholder={'Enter first name...'} 
                    inputID={'first-name'} 
                    label={'First Name'}
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <FormInput type={'text'} 
                    placeholder={'Enter last name...'} 
                    inputID={'last-name'} 
                    label={'Last Name'}
                    value={form.lastName}
                    onChange={handleChange}
                    />
                </div>
                <div className="info-content">
                  <FormInput 
                    type={'date'} 
                    inputID={'date-of-birth'} 
                    label={'Date of Birth'}
                    
                    value={form.dateofBirth}
                    onChange={handleChange}
                  />
                  <div className="select-info">

                    <label htmlFor="select-gender">
                      Gender
                    </label>
                    <select name="" id="select-gender">
                      <option value="" inert>select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="info-content">
                  <FormInput 
                    type={'text'} 
                    placeholder={'Enter email...'} 
                    inputID={'email-input'} 
                    label={'Email'} 
                    value={form.email}
                    onChange={handleChange}
                  />
                  <FormInput 
                    type={'text'} 
                    placeholder={'+233 556 778 909'} 
                    inputID={'phone'} 
                    label={'Phone Number'}
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
          </div>
          <div className="personal-info-div contact-info-div">
            <h3>Contact Information</h3>
              <div className="personal-info">
                <div className="info-content">
                  <FormInput 
                    type={'text'} 
                    placeholder={'Enter adddress'} 
                    inputID={'address'} 
                    label={'Address'} 
                    value={form.address}
                    onChange={handleChange}
                  />
                  <FormInput 
                    type={'text'} 
                    placeholder={'Enter city'} 
                    inputID={'city'} 
                    label={'City'}
                    value={form.city}
                    onChange={handleChange}
                  />
                  <FormInput 
                    type={'text'} 
                    placeholder={'Enter country'} 
                    inputID={'country'} 
                    label={'Country'}
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
          </div>
          <div className="personal-info-div academic-info-div">
            <h3>Professional Information</h3>
              <div className="academic-info">
                <div className="info-content">
                  <div className="select-info">

                    <label htmlFor="select-specialization">
                      Subject Specialization
                    </label>
                    <select 
                      name="" 
                      id="select-specialization" 
                      value={form.subjectSpecialization}
                      onChange={handleChange}
                    >
                      <option >Selected</option>
                      <option value="Web 200">Web 200</option>
                      <option value="Web 200">Com 390</option>
                      <option value="Web 200">IT 700</option>
                    </select>
                  </div>
                  {/* <FormInput 
                    type={'text'}  
                    placeholder={'Enter date...'} 
                    inputID={'date-enrolled'} 
                    label={'Enrollment Date'}
                    value={form.yearsOfExperience}
                    onChange={handleChange}
                    className={'none'}
                  /> */}
                  <FormInput 
                    type={'text'} 
                    placeholder={'Enter qualification'} 
                    inputID={'qualification'} 
                    label={'Highest Qualifications'} 
                    value={form.highestQualification}
                    onChange={handleChange}
                  />
                  <FormInput 
                    type={'text'} 
                    placeholder={'eg. PhD, Masters'} 
                    inputID={'experience'} 
                    label={'Years of Experience'} 
                    value={form.yearsOfExperience}
                  />
                  <div className="select-info">

                    <label htmlFor="select-class">
                      Assign Class
                    </label>
                    <select name="" id="select-class" value={form.assignClass} onChange={handleChange}>
                      <option value="" inert>select class</option>
                      <option value="Web 205">Web 205</option>
                      <option value="Tech 304">Tech 304</option>
                    </select>
                  </div>
                </div>
              </div>
          </div>
        </form>
      </div>
      <div className="save-new-student">
        <Button btnType={'submit'} name={name} />
        <WhiteButton name={'Cancel'} onClick={handleCancel}/>
      </div>
    </div>
  )
}

export default ReusableInfoForm
