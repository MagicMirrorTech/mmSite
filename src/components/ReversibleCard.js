import React from 'react'
import styled from 'styled-components'
import { Stack, Flex, Heading, Box, Text, Image } from '@chakra-ui/core'

const ContinueReading = styled.span`
  color: #4ca1ff;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`

export default function ReversibleCard(props) {
  const { heading1, heading2, c1, content, image, direction, blog } = props
  return (
    <Flex mt={8} direction={direction}>
      <Box w="70%" py={16} px="115px">
        <Stack textAlign={direction === 'row' ? 'right' : 'left'} spacing={5}>
          <Box>
            <Heading color={c1} fontSize="1.8rem">
              {heading1}
            </Heading>
            <Heading fontSize="1.8rem">{heading2}</Heading>
          </Box>
          <Text fontSize="xl">
            {content}{' '}
            {blog ? <ContinueReading>CONTINUE READING</ContinueReading> : null}
          </Text>
        </Stack>
      </Box>
      <Image alt={heading1} w="30%" src={image} />
    </Flex>
  )
}
