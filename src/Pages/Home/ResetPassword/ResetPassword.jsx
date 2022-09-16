import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ResetPasswordForm from '../../../cmp/Forms/ResetPassword/ResetPassword'
import { api, endpoints } from '../../../lib/Routes/api/'
import { Link, useLocation } from 'react-router-dom'
import JAlert from '../../../cmp/Forms/Alert/Alert'
import { MENU_TYPES } from '../../../lib/constants'
import withMenu from '../../../hoc/withMenu'
import { getHeaderStructure } from '../../../lib/helpers'

const ResetPassword = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('danger')
  const [token, setToken] = useState()
  const location = useLocation()

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search)
      setToken(params.get('token'))
    }
  }, [location.search])

  const submitRestPassword = async (data) => {
    const config = {
      headers: getHeaderStructure(token),
      data,
    }
    const result = await api.call(endpoints.resetPassword, config)
    if (!result.success) {
      setMessage(result.data)
      return
    }
    setVariant('success')
    setMessage('Your password has been successfully changed!')
  }

  return (
    <>
      <Container>
        <h1>Reset Password</h1>
        <JAlert variant={variant}>{message}</JAlert>
      </Container>
      {variant !== 'success' ? <ResetPasswordForm setMessage={setMessage} submit={submitRestPassword} /> : <Container><Link to="/login">Go to login</Link></Container>}
    </>
  )
}

export default withMenu(ResetPassword, MENU_TYPES.exposed)