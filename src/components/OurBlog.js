import React from 'react'
import { Stack, Heading, Button } from '@chakra-ui/core'
import ReversibleCard from './ReversibleCard'

const blogEntries = [
  {
    heading1: 'SHOULD I PUT',
    heading2: 'MY BUSSINESS ONLINE?',
    c1: 'mmorange',
    content:
      'To what extent is it possible to move most if not all of one’s business activities online and more-or-less do away with the need for physical office space and infrastructure, or at least cut my costs significantly?',
    image: '/assets/g5.png',
    direction: 'row-reverse'
  },
  {
    heading1: '6 WAYS TO GROW YOUR',
    heading2: 'BUSINESS IN 2020',
    c1: 'mmblue.500',
    content:
      'With technology moving as it is, it can feel like your business may be falling behind and only big corporations have the money, time and resources to keep up with everything and use it in their favor... But guess what?',
    image: '/assets/g6.png',
    direction: 'row'
  }
]

export default function OurBlog() {
  return (
    <Stack textAlign="center" px={24} py={20} spacing={20}>
      <Heading
        mt="-35px"
        left="10%"
        right="10%"
        as="h2"
        pos="absolute"
        color="mmheading"
        fontSize="hmd"
        fontWeight="semibold"
      >
        GO CHECK OUR BLOG
      </Heading>
      <Heading as="h3" color="mmblue.500">
        THESE ARE SOME OF OUR IDEAS
      </Heading>
      {blogEntries.map((entry, idx) => (
        <ReversibleCard
          key={idx}
          c1={entry.c1}
          heading1={entry.heading1}
          heading2={entry.heading2}
          content={entry.content}
          image={entry.image}
          direction={entry.direction}
          blog
        />
      ))}
      <Button
        as="a"
        rel="noopener noreferrer"
        href="https://mmdevsblog.netlify.com/"
        target="_blank"
        size="lg"
        alignSelf="center"
        width="25%"
        backgroundColor="mmblue.500"
        variantColor="mmblue"
        mt={10}
        h="4rem"
      >
        GO TO BLOG!
      </Button>
    </Stack>
  )
}
