import React from 'react'
import { Box, Text } from '@chakra-ui/core'

export default function PrivacyCard() {
  return (
    <Box w="100%" px={[5, 5, 5, '120px']} py={10}>
      <Box
        display={['none', 'none', 'none', 'block']}
        zIndex="-1"
        ml="15px"
        mt="15px"
        position="absolute"
        w="83.5%"
        h="300px"
        borderWidth="4px"
        borderColor="mmyellow.500"
      ></Box>
      <Box bg="white" shadow="xl" p={5}>
        <Text mb={5} fontSize="xl">
          Following the posting of such changes, your continued use of the www.magicmirror.dev
          website will constitute your acceptance of these changes and you will be bound by such
          changes. If you do not continue to use the www.magicmirror.dev website following a change
          to our Policy but take no other action with respect to your personal information, our use
          of that information will remain subject to our Policy as it was in effect prior to the
          change. You are responsible for regularly reviewing this Policy and any changes there to.
        </Text>
        <Text fontSize="xl">
          We may offer you the ability to connect with our website, or use our applications,
          services, and tools using a mobile device, either through a mobile application or via a
          mobile optimized website. The provisions of this Policy apply to all such mobile access
          and use of mobile devices. This Policy will be referenced by all such mobile applications
          or mobile optimized websites.
        </Text>
      </Box>
    </Box>
  )
}
