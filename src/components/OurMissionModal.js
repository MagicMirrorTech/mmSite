import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/core'

export default function OurMissionModal({ isOpen, onClose }) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text
            mb="1rem"
            textAlign="center"
            fontWeight="bold"
            fontSize="1.5rem"
            color="mmblue.500"
          >
            OUR MISSION
          </Text>
          <Text mb="2rem" textAlign="center" fontSize="1.2rem">
            We believe the next 20 years will be some of the most tumultuous,
            innovative, and difficult in modern history. We believe a huge
            percentage of the global population will see their lives flipped
            upside down, and we believe we have an obligation to not sit idly by
            while such changes transpire. Rather, we have plans to donate,
            volunteer, and generally conduct business with a purpose:
            contributing to the betterment of our future.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
