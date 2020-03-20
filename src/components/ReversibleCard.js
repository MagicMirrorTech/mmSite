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
    <Flex mt={8} direction={direction} wrap="wrap">
      <Box order={[1, 1, 1, 2]} w={['100%', '100%', '100%', '70%']} py={16} px={[0, 0, 0, '115px']}>
        <Stack textAlign={direction === 'row' ? 'right' : 'left'} spacing={5}>
          <Box>
            <Heading
              textAlign={['center', 'center', 'center', 'unset']}
              color={c1}
              fontSize={['1rem', '1.3rem', '1.8rem', '1.8rem']}
            >
              {heading1}
            </Heading>
            <Heading
              textAlign={['center', 'center', 'center', 'unset']}
              fontSize={['1rem', '1.3rem', '1.8rem', '1.8rem']}
            >
              {heading2}
            </Heading>
          </Box>
          <Text
            textAlign={['justify', 'justify', 'justify', 'unset']}
            fontSize={['lg', 'lg', 'xl', 'xl']}
          >
            {content} {blog ? <ContinueReading>CONTINUE READING</ContinueReading> : null}
          </Text>
        </Stack>
      </Box>
      <Image
        mx={['25%', '25%', '25%', 0]}
        alt={heading1}
        size={['50%', '50%', '50%', '30%']}
        src={image}
      />
    </Flex>
  )
}
