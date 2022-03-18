import React from 'react'
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label?: string
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <FormControl>
      {label && (
        <FormLabel htmlFor={name} fontSize="sm">
          {label}:
        </FormLabel>
      )}

      <ChakraInput
        focusBorderColor="blue.500"
        bg="gray.900"
        border="none"
        name={name}
        {...rest}
      />
    </FormControl>
  )
}
