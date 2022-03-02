import axios from 'axios'
import { useForm } from 'react-hook-form'

import useAuthContext from '@contexts/Auth'

import InputField from '@components/InputField'
import InputLabel from '@components/InputLabel'
import InputError from '@components/InputError'
import Button from '@components/Button'

import { setAuthToken } from '@lib/auth'

import * as styles from './LogInForm.module.css'

const LOG_IN_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`

const LogInForm = () => {
  const { logIn, setUser } = useAuthContext()
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm()

  const onLogIn = async ({ identifier, password }) => {
    try {
      const response = await axios.post(LOG_IN_ENDPOINT, {
        identifier,
        password,
      })
      const { data, status, headers } = response
      logIn(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className={styles.component} onSubmit={handleSubmit(onLogIn)}>
      <h1>Log In</h1>
      <InputLabel title="Email">
        <InputField type="text" register={register("identifier", { required: true })} />
        <InputError hasError={errors.identifier}>This field is required</InputError>
      </InputLabel>
      <InputLabel title="Password">
        <InputField type="password" register={register("password", { required: true })} />
        <InputError hasError={errors.password}>This field is required</InputError>
      </InputLabel>
      <InputLabel>
        <Button type="submit" wide>Log In</Button>
      </InputLabel>
    </form>
  )
}

export default LogInForm