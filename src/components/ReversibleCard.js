import React from 'react'
import { Stack, Flex, Heading, Box, Text, Image } from '@chakra-ui/core'

const ContinueReading = () => (
  <Box
    cursor="pointer"
    color="#4ca1ff"
    fontWeight="bolder"
    as="a"
    rel="noopener noreferrer"
    href="https://mmdevsblog.netlify.com/"
    target="_blank"
  >
    CONTINUE READING
  </Box>
)

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
            {content} {blog ? <ContinueReading /> : null}
          </Text>
        </Stack>
      </Box>
      <Image
        mx={[!blog ? '25%' : 0, !blog ? '25%' : 0, !blog ? '25%' : 0, 0]}
        alt={heading1}
        size={[blog ? '100%' : '50%', blog ? '100%' : '50%', blog ? '100%' : '50%', '30%']}
        src={image}
      />
    </Flex>
  )
}
