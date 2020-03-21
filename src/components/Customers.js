import React from 'react'
import { Stack, Heading, Flex, Text, IconButton, Icon } from '@chakra-ui/core'

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
  const scrollCarousel = delta => {
    const carousel = document.querySelector('#carousel')
    const width = carousel.offsetWidth
    carousel.scroll({
      left: width * delta,
      top: 0,
      smooth: true
    })
  }

  return (
    <Stack
      px={['10px', '10px,', '90px', '90px']}
      py={['50px', '50px', '50px', '150px']}
      spacing={[10, 10, 10, 20]}
      textAlign="center"
    >
      <Heading
        mt="-35px"
        right="120px"
        as="h2"
        pos="absolute"
        fontWeight="semibold"
        fontSize="hmd"
        opacity="0.14"
        letterSpacing="5px"
        display={['none', 'none', 'none', 'block']}
      >
        HAPPY CUSTOMERS
      </Heading>
      <Heading color="mmblue.500" fontSize={['1.5rem', '1.5rem', '2rem', '2rem']}>
        THIS IS WHAT OUR CUSTOMERS SAY ABOUT US
      </Heading>
      <Stack
        style={{ scrollBehavior: 'smooth' }}
        id="carousel"
        mt={['25px', '25px', '100px', '100px']}
        overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
        spacing={10}
        isInline
      >
        {mockData.map(article => (
          <Flex
            key={article.id}
            p={5}
            minW={['100%', '100%', '100%', '520px']}
            height="250px"
            textAlign="left"
            align="center"
            justify="center"
            borderWidth="2px"
            rounded="md"
            borderColor="mmorange"
          >
            <Text fontSize={['1rem', '1rem', '1.2rem', '1.2rem']}>{article.text}</Text>
          </Flex>
        ))}
      </Stack>
      <Icon
        display={['block', 'block', 'block', 'none']}
        name="dots"
        size="30px"
        alignSelf="center"
      />
      <Stack display={['none', 'none', 'none', 'block']} isInline alignSelf="center" spacing={20}>
        <IconButton
          onClick={() => scrollCarousel(-1)}
          variant="outline"
          borderRadius="50px"
          w="50px"
          h="50px"
          variantColor="mmblue"
          aria-label="Scroll Left Carousel"
          icon="chevron-left"
          fontSize="50px"
          color="mmblue.500"
          borderColor="mmblue.500"
        />
        <IconButton
          onClick={() => scrollCarousel(1)}
          variant="outline"
          borderRadius="50px"
          w="50px"
          h="50px"
          variantColor="mmblue"
          aria-label="Scroll Right Carousel"
          icon="chevron-right"
          fontSize="50px"
          color="mmblue.500"
          borderColor="mmblue.500"
        />
      </Stack>
    </Stack>
  )
}
