import React from 'react'
import { Stack, Heading, Flex, Image, Text } from '@chakra-ui/core'

const partnersData = [
  {
    id: 1,
    img: '/assets/srs.png',
    field: 'FINANCIAL ANALYSIS GURUS',
    description: "30+ years can't be a fluke"
  },
  {
    id: 2,
    img: '/assets/argyle.png',
    field: 'MOBILE & ONLINE PAYMENTS',
    description: 'Smarter than your payment system'
  }
]

export default function Partners() {
  return (
    <Stack textAlign="center" px={[0, 0, 24, 24]} py={[10, 10, 20, 20]} spacing={10}>
      <Heading
        mt="-35px"
        ml="45px"
        as="h2"
        pos="absolute"
        color="mmheading"
        fontSize="hmd"
        fontWeight="semibold"
        display={['none', 'none', 'none', 'block']}
      >
        PARTNERS
      </Heading>
      <Heading as="h3" color="mmblue.500">
        OUR PARTNERS
      </Heading>
      <Flex
        p={10}
        align="center"
        justify="space-between"
        wrap={['wrap', 'wrap', 'wrap', 'no-wrap']}
      >
        {partnersData.map(partner => (
          <Flex
            key={partner.id}
            p={8}
            shadow="xl"
            bg="white"
            minH="340px"
            w={['100%', '100%', '100%', '40%']}
            direction="column"
            justify="center"
            align="center"
            wrap="wrap"
            mb={[10, 10, 10, 10]}
          >
            <Image alt={partner.field} src={partner.img} mb={10} />
            <Text
              mt={partner.id === 1 ? 10 : 0}
              fontWeight="bold"
              fontSize="1.4rem"
              color="mmblue.500"
            >
              {partner.field}
            </Text>
            <Text fontSize={['1.2rem', '1.2rem', '1.4rem', '1.4rem']}>{partner.description}</Text>
          </Flex>
        ))}
      </Flex>
    </Stack>
  )
}
