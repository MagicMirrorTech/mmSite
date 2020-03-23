import React from 'react'
import ReversibleCard from './ReversibleCard'
import { Stack, Heading } from '@chakra-ui/core'

const services = [
  {
    heading1: 'CUSTOM & READY-MADE',
    heading2: 'SOFTWARE OPTIONS',
    c1: 'mmorange',
    content:
      'Maybe you know exactly what you want, maybe you’re still figuring that out; either way we act as guides along the process. We give you the best options that fit your needs - sometimes that means we suggest a different company to handle your project. Our goal is to ensure you’re successful.',
    image: '/assets/g1.png',
    direction: 'row'
  },
  {
    heading1: 'BUSINESS TECHNOLOGY',
    heading2: 'CONSULTING',
    c1: 'mmblue.500',
    content:
      'We have partnered with a wide range of business leaders: from those unsure of the best way to accept payments, to those looking to implement a Machine Learning algorithm to boost sales. As our main goal is to help small businesses bridge adopt new technologies, we take pride in providing you the best advice and solutions specific to your needs.',
    image: '/assets/g2.png',
    direction: 'row-reverse'
  },
  {
    heading1: 'MARKETING',
    heading2: 'MANAGMENT',
    c1: 'mmorange',
    content:
      'Modern marketing is a strange, new world. Fortunately, we have already successfully navigated this burgeoning landscape (how did you get to this page?). We work within your existing marketing strategy (or create one for you), to deliver the target return on investment (ROI) for each key performance index (KPI).',
    image: '/assets/g3.png',
    direction: 'row'
  },
  {
    heading1: 'DATA: CREATION, MANAGMENT, &',
    heading2: 'INTERPRETATION',
    c1: 'mmblue.500',
    content:
      'Information is power, right? Overtime we have found key metrics for each industry that we have proven to drive growth, provide clear options for important decisions, and offer an avenue for customer-driven improvements.',
    image: '/assets/g4.png',
    direction: 'row-reverse'
  }
]

export default function Services() {
  return (
    <Stack px={[8, 8, 24, 24]} py={20} spacing={10}>
      <Heading
        mt="-85px"
        as="h2"
        pos="absolute"
        color="mmheading"
        fontSize="hmd"
        fontWeight="semibold"
        display={['none', 'none', 'none', 'block']}
        zIndex="2"
      >
        SERVICES
      </Heading>
      <Heading
        mt={[0, 0, 0, '-50px']}
        ml={[0, 0, 0, '250px']}
        as="h3"
        color="mmblue.500"
        fontSize={['1.7rem', '1.7rem', '2rem', '2rem']}
        alignSelf={['center', 'center', 'center', 'unset']}
        zIndex="1"
      >
        PASSION LED US HERE
      </Heading>
      {services.map((service, idx) => (
        <ReversibleCard
          key={idx}
          c1={service.c1}
          heading1={service.heading1}
          heading2={service.heading2}
          content={service.content}
          image={service.image}
          direction={service.direction}
        />
      ))}
    </Stack>
  )
}
