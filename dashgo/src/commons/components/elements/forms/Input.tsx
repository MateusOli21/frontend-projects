import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
