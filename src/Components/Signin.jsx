import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  // name: yup.string().required('Name is required')
  email: yup.string().email('this must be a valid email').required('email is required'),

  password1: yup.string().required('password is required').min(4, 'password must be more than 4 ').max(15, 'password must be less than 15 ').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
    , "Must have atleast a capital alphabet, number and special character."),
  })
function Signin() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema)
  })
  const { errors } = formState
  function submitForm(data) {
    // data.preventDefault()
    console.log(data)
  }
  return (
    <div className='text-center'>
      <main class="form-signin">
  <form onSubmit={handleSubmit(submitForm)}>
    <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal"> Sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" {...register('email')}/>
      <label for="floatingInput">Email address</label>
      {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        <br></br>
    </div>
    
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"{...register('password1')}/>
      <label for="floatingPassword">Password</label>
      {errors.password1 && <span style={{ color: 'red' }}>{errors.password1.message}</span>}<br></br>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
    </div>
  )
}

export default Signin
