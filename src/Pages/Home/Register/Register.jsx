import { Container } from 'react-bootstrap'
import RegisterForm from '../../../cmp/Forms/Register/Register'

import {api, endpoints} from '../../../lib/Routes/api/'
import { useState } from 'react'
import JAlert from '../../../cmp/Forms/Alert/Alert'
import { MENU_TYPES } from '../../../lib/constants'
import withMenu from '../../../hoc/withMenu'

const Register = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('danger')

  const submitRegister = async (data) => {
    setVariant('danger')
    const config = {
      data,
    }
    const result = await api.call(endpoints.register, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }
    setVariant('success')
    setMessage('Please verify your account')
  }

  return (
    <>
      <Container>
        <h1>Register</h1>
        <JAlert variant={variant}>{message}</JAlert>
      </Container>
      {variant !== 'success' && <RegisterForm setMessage={setMessage} submit={submitRegister} />}
    </>
  )
}

export default withMenu(Register, MENU_TYPES.exposed)