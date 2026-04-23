import React from 'react'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import FormInput from '../../components/forms/FormInput'
import Button from '../../components/buttons/Button'
import WhiteButton from '../../components/buttons/WhiteButton'
import '../../styles/admin/addNewStudentPage.css'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import AdminPageHeader from '../../components/admin/AdminPageHeader'
import SuccessToast from '../../components/ui/feedback/SuccessToast'

function AddNewTeacherPageNew() {
  const navigate = useNavigate()
  const [form, setForm] = React.useState([{
    firstName: '',
    lastName: '', 
    dateofBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    subSpecialization: '',
    enrolledDate: '', 
    highestQualification: '',
    yearofExperience: '',
    assignedCLass: ''
  }])

  function handleAddTeacher(){
    navigate('/admin/Teachers/')
  }

  function handleSubmit(e){
    e.preventDefault()
    {form ? <SuccessToast message={'Added Teacher Successfully'}/> : null}
    navigate('/teachers/assessment')
  }
  return (
    <div className='add-new-student-page-div'>
      <div className="new-student-top-content">
        <AdminPageHeader 
          title={'Add New Teacher'} 
          subtitle={'Fill out the form to add new student'} 
          onClick={handleAddTeacher}
          backTo={'/admin/teachers'}
        />
      </div>
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
                    onChange={(e)=> setForm(e.target.value)}
                  />
                  <FormInput type={'text'} 
                    placeholder={'Enter last name...'} 
                    inputID={'last-name'} 
                    label={'Last Name'}
                    value={form.lastName}
                    onChange={(e)=> setForm(e.target.value)}
                    />
                </div>
                <div className="info-content">
                  <FormInput 
                    type={'date'} 
                    inputID={'date-of-birth'} 
                    label={'Date of Birth'}
                    
                    value={form.dateofBirth}
                    onChange={(e)=> {setForm(e.target.value); console.log(form.dateofBirth)}}
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
                  <FormInput type={'text'} placeholder={'Enter email...'} inputID={'email-input'} label={'Email'} />
                  <FormInput type={'text'} placeholder={'+233 556 778 909'} inputID={'phone'} label={'Phone Number'} />
                </div>
              </div>
          </div>
          <div className="personal-info-div contact-info-div">
            <h3>Contact Information</h3>
              <div className="personal-info">
                <div className="info-content">
                  <FormInput type={'text'} placeholder={'Enter adddress'} inputID={'address'} label={'Address'} />
                  <FormInput type={'text'} placeholder={'Enter city'} inputID={'city'} label={'City'}/>
                  <FormInput type={'text'} placeholder={'Enter country'} inputID={'country'} label={'Country'}/>
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
                    <select name="" id="select-specialization">
                      <option >Selected</option>
                      <option value="Web 200">Web 200</option>
                      <option value="Web 200">Com 390</option>
                      <option value="Web 200">IT 700</option>
                    </select>
                  </div>
                  <FormInput type={'date'} styles={{display: 'flex', justifyContent: 'space-between'}} inputID={'date-enrolled'} label={'Enrollment Date'}/>
                  <FormInput type={'text'} placeholder={'Enter qualification'} inputID={'qualification'} label={'Highest Qualifications'} />
                  <FormInput type={'text'} placeholder={'eg. PhD, Masters'} inputID={'experience'} label={'Years of Experience'} />
                  <div className="select-info">

                    <label htmlFor="select-class">
                      Assign Class
                    </label>
                    <select name="" id="select-class">
                      <option value="" inert>select class</option>
                      <option value="Web 205">Web 205</option>
                      <option value="Tech 304">Tech 304</option>
                    </select>
                  </div>
                </div>
              </div>
          </div>
        </form>
      <div className="save-new-student">
        {form ? <Button btnType={'submit'} name={'Add Teacher'} />: null}
        <WhiteButton name={'Cancel'} onClick={handleAddTeacher}/>
      </div>
      </div>
    </div>
  )
}

export default AddNewTeacherPageNew
