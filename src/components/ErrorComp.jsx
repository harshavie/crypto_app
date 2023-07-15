import { Alert,AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComp = ({message}) => {
  return (
    <Alert 
      status='error'
      position={'fixed'}
      bottom={'40%'}
      justifyContent={'center'}
      left={'50%'}
      transform={'translateX(-50%)'}
      w={'container.lg'}  
    >
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComp