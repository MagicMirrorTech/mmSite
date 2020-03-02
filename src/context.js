import React, { createContext, useState } from 'react'
import { useDisclosure } from '@chakra-ui/core'

export const Context = createContext()

function ContextProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  return (
    <Context.Provider
      value={{
        modal,
        toggleModal,
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
