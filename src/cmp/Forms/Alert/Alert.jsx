import React from 'react'
import { Alert } from 'react-bootstrap'

const JAlert = ({variant, children}) => {
  return (
    <>
      { children && <Alert variant={variant}>{children}</Alert>}
    </>
  )
}

export default JAlert