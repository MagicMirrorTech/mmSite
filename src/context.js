import React, { createContext } from 'react'
import { useDisclosure } from '@chakra-ui/core'

export const Context = createContext()

function ContextProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Context.Provider
      value={{
        isOpen,
        onClose,
        onOpen
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
