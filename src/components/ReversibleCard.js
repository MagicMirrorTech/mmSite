import React from 'react'
import { Stack, Flex, Heading, Box, Text, Image } from '@chakra-ui/core'

export default function ReversibleCard(props) {
  const { heading1, heading2, c1, content, image, direction } = props
  return (
    <Flex direction={direction}>
      <Box w="70%" py={16} px="115px">
        <Stack textAlign={direction === 'row' ? 'right' : 'left'} spacing={5}>
          <Box>
            <Heading color={c1} fontSize="1.8rem">
              {heading1}
            </Heading>
            <Heading fontSize="1.8rem">{heading2}</Heading>
          </Box>
          <Text fontSize="xl">{content}</Text>
        </Stack>
      </Box>
      <Image w="30%" src={image} />
    </Flex>
  )
}
