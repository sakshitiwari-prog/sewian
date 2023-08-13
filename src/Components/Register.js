import React from 'react'
import '../style/RegisterStyle.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import countryData from '.././country.json'
import cityData from '.././CitycumCountry.json'
import stateData from '.././state.json'


let updateStateData = stateData.countries
let countryOption = countryData.country_list

let statesCheckVar = 0;
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('this must be a valid email').required('email is required'),

  password1: yup.string().required('password is required').min(4, 'password must be more than 4 ').max(15, 'password must be less than 15 ').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
    , "Must have atleast a capital alphabet, number and special character."),
    
  phoneNo: yup.string().required('A phone number is required').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').length(10),

  country: yup.string().required('country is required'),

  city: yup.string().required('city is required').test('city-test',
    'city is not valid',
    function (value) {
      for (let arr in cityData) {
        if (arr === this.parent.country) {
          let result = ''
          const words = value.split(' ')
          words.map((e) => {
            result = result.concat( e.charAt(0).toUpperCase() + e.slice(1)," ");
            return result
          })
          result = result.slice(0,result.length-1);
          console.log(result)
          console.log(cityData[arr].includes(result));
          return cityData[arr].includes(result)
        }
      }
    }
  ),
  state: yup.string().required('state is required').test('state-test',
    'state is not valid',
    function (value) {

      let isValid = false;
      updateStateData.forEach((i) => {
        statesCheckVar = 0
        for (let j in i) {
          if (i[j] === this.parent.country) {
            statesCheckVar = 1
            continue
          }
          if (statesCheckVar) {
            let result = ''
            const words = value.split(' ')
            words.map((e) => {
              result = result.concat( e.charAt(0).toUpperCase() + e.slice(1)," ");
              return result
            })
            result = result.slice(0,result.length-1);
            console.log(result)
            console.log(i[j].includes(result));
            isValid = i[j].includes(result)
          }
        }
      }
      )
      return isValid;
    }
  ),
  Pincode:yup.string()
  .length(6)
  .matches(/^[0-9]{6}/)
  .required()
  .label('Kode Pos')
})

function Register() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
      })
      const { errors } = formState
      function submitForm(data) {
        // data.preventDefault()
        console.log(data)
      }
  return (
    <div alt="registerbackgroundimg" className='registerbg'>
            <h5 class="card-title">Create an account</h5>
            <p class="card-title">Pleae select the category</p>

            <div>
      <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="name">Name:</label>
        <input type="text" id='name' placeholder='Enter your name' {...register('name')} /><br></br>
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='xyz@gmail.com' {...register('email')} /><br></br>
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        <br></br>
        <label htmlFor="email">Phone no.:</label>
        <input  id='phoneNo' placeholder='91XXXXXXXX' {...register('phoneNo')} /><br></br>
        {errors.phoneNo && <span style={{ color: 'red' }}>{errors.phoneNo.message}</span>}
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type='password' id='password'{...register('password1')} placeholder='password' /><br></br>
        {errors.password1 && <span style={{ color: 'red' }}>{errors.password1.message}</span>}<br></br>
        <label htmlFor="country">country</label>
        <select {...register('country')} id='country' >
          <option value="">Select country</option>
          {countryOption.map((country, index) => {
            return <option key={index} value={country}>{country}</option>
          })}
        </select>
        {errors.country && <span style={{ color: 'red' }}>{errors.country.message}</span>}<br></br>
        <label htmlFor="state">state</label>
        <input id='state' placeholder=''{...register('state')} /><br></br>
        {errors.state && <span style={{ color: 'red' }}>{errors.state.message}</span>}<br></br>
        
        <label htmlFor="city">city</label>
        <input id='city' placeholder=''{...register('city')} /><br></br>
        {errors.city && <span style={{ color: 'red' }}>{errors.city.message}</span>}<br></br>
        <input type="number" id='Pincode' placeholder='Pincode' {...register('Pincode')} /><br></br>
        {errors.Pincode && <span style={{ color: 'red' }}>{errors.Pincode.message}</span>}
        <br></br>
        <input type="submit" value="submit" />
      </form>
      <div><p>Already have an account ? </p><span><u>Sign in</u></span>
    </div>
    </div>
    </div>
  )
}

export default Register
