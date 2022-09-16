import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { MENU_TYPES } from '../../../lib/constants'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../lib/Routes/store/slices/auth'
import { useDispatch } from 'react-redux'
import Login from '../../../cmp/Forms/Login/Login'
import JAlert from '../../../cmp/Forms/Alert/Alert'
import withMenu from '../../../hoc/withMenu'
import {api, endpoints} from '../../../lib/Routes/api/'

const LogIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const [errorMessage, setErrorMessage] = useState()
  
    const submit = async (data) => {
      const config = {
        data,
      }
      const result = await api.call(endpoints.login, config)
      if (!result.success) {
        setErrorMessage([result.data])
        return
      }
      dispatch(login(result.data))
      navigate('/dashboard')
    }
  
    return (
      <>
        <Container>
          <h1>Login</h1>
          <JAlert variant={'danger'}>{errorMessage}</JAlert>
        </Container>
        <Login setMessage={setErrorMessage} submit={submit} /> 
      </>
    )
  }
  export default withMenu(LogIn, MENU_TYPES.exposed);