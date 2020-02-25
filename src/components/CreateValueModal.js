import React from 'react'
import {
  Text,
  Stack,
  Modal,
  Input,
  Button,
  Textarea,
  FormLabel,
  ModalBody,
  FormControl,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Flex
} from '@chakra-ui/core'

export default function CreateValueModal({ isOpen, onClose }) {
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
            color="mm.blue.500"
          >
            CREATE VALUE!
          </Text>
          <Text mb="2rem" textAlign="center" fontSize="1.2rem">
            Send us a message and we will contact you ASAP!
          </Text>
          <Stack spacing={3}>
            <FormControl>
              <FormLabel htmlFor="name">NAME (optional)</FormLabel>
              <Input
                type="text"
                id="name"
                placeholder="Write your name here"
                focusBorderColor="mm.blue.500"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">EMAIL</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Write your email here"
                focusBorderColor="mm.blue.500"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">MESSAGE</FormLabel>
              <Textarea
                focusBorderColor="mm.blue.500"
                placeholder="Write your message here"
                size="lg"
                resize="none"
              />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Flex mb={3} w="100%" align="center" justify="space-between">
            <Button w="40%" size="lg" variantColor="mm.gray" onClick={onClose}>
              CANCEL
            </Button>
            <Button w="40%" size="lg" variantColor="mm.blue">
              SEND
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
