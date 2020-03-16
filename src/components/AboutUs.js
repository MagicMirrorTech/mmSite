import React from 'react'
import { Heading, Text, Stack, Box, Button } from '@chakra-ui/core'

function AboutUs({ onOpen }) {
  return (
    <Box
      w="100%"
      minH={['auto', '50vh', '80vh', '80vh']}
      display="flex"
      boxSizing="border-box"
      px={[8, 8, 24, 24]}
      py={[4, 4, 16, 16]}
      bgImage="url('/assets/about_us.png')"
      bgSize={['150% 100%', '150% 100%', 'cover', 'cover']}
      bgPos={['60%', '60%', '', '']}
      bgRepeat="no-repeat"
    >
      <Stack w={['100%', '100%', '100%', '55%']} spacing={8}>
        <Heading as="h1" fontSize={['1.7rem', '1.7rem', '3rem', '3rem']} letterSpacing="2px">
          <span style={{ fontWeight: 'lighter' }}>May the odds </span>
          be ever in your favor
        </Heading>
        <Text fontSize={['md', 'md', 'xl', 'xl']}>
          Magic Mirror is here to put the odds in your favor. Long gone are the days where competing
          against big companies felt like a losing battle.
        </Text>
        <Text fontSize={['md', 'md', 'xl', 'xl']}>
          We are a group of highly efficient nerds, bridging the gap between fancy new technology
          and real revenue gains they promise.
        </Text>
        <Button
          boxShadow="md"
          _hover={{ boxShadow: 'lg' }}
          _active={{ boxShadow: 'xl' }}
          backgroundColor="mmblue.500"
          variantColor="mmblue"
          size={['sm', 'sm', 'lg', 'lg']}
          w={['60%', '60%', '40%', '40%']}
          h={['2.6rem', '2.6rem', '4rem', '4rem']}
          onClick={onOpen}
          alignSelf={['center', 'center', 'flex-start', 'flex-start']}
        >
          CREATE VALUE
        </Button>
      </Stack>
      <Heading
        as="h2"
        pos="absolute"
        display={['none', 'none', 'none', 'block']}
        ml="450px"
        mt="100px"
        fontWeight="semibold"
        fontSize="heading"
        color="mmheading"
      >
        ABOUT US
      </Heading>
    </Box>
  )
}

export default AboutUs
