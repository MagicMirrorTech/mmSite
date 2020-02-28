import React from 'react'
import { Stack, Heading, Flex, Text, Icon, Button } from '@chakra-ui/core'

const mockData = [
  {
    id: 1,
    text:
      'Magic Mirror Devs has done an exceptional job of defining the problem at the outset. Their approach always helps me clear my head, focus my thoughts, and get down to exactly what I want to achieve.'
  },
  {
    id: 2,
    text:
      'I feel like Magic Mirror Devs is a partner as we tackle different projects and business problems. I always really appreciate it when they present my full field of options, even recommending solutions with other companies. They’re not about selling services, they really focus on what’s best for what I’m trying to do.'
  },
  {
    id: 3,
    text:
      'I’ve worked directly with James, the CEO, and I feel that he is genuinely listening to my concerns, addressing each one until we’ve worked through every point. Then there’s follow up and, most importantly, results.'
  }
]

export default function Customers() {
  return (
    <Stack px="90px" py="150px" spacing={20} textAlign="center">
      <Heading
        mt="-35px"
        right="120px"
        as="h2"
        pos="absolute"
        fontWeight="semibold"
        fontSize="hmd"
        opacity="0.14"
        letterSpacing="5px"
      >
        HAPPY CUSTOMERS
      </Heading>
      <Heading color="mmblue.500">THIS IS WHAT OUR CUSTOMERS SAY ABOUT US</Heading>
      <Stack mt="100px" overflowX="hidden" spacing={10} isInline>
        {mockData.map(article => (
          <Flex
            key={article.id}
            p={5}
            minW="520px"
            height="250px"
            textAlign="left"
            align="center"
            justify="center"
            borderWidth="2px"
            rounded="md"
            borderColor="mmorange"
          >
            <Text fontSize="1.2rem">{article.text}</Text>
          </Flex>
        ))}
      </Stack>
      <Stack isInline alignSelf="center" spacing={20}>
        <Button variant="outline" borderRadius="50px" w="50px" h="50px" variantColor="mmblue">
          <Icon
            name="chevron-left"
            size="50px"
            color="mmblue.500"
            borderRadius="50px"
            borderColor="mmblue.500"
          />
        </Button>

        <Button variant="outline" borderRadius="50px" w="50px" h="50px" variantColor="mmblue">
          <Icon
            name="chevron-right"
            size="50px"
            color="mmblue.500"
            borderRadius="50px"
            borderColor="mmblue.500"
          />
        </Button>
      </Stack>
    </Stack>
  )
}
