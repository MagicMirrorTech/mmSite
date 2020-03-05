import React, { useState } from 'react'
import CollapsePoint from './CollapsePoint'

import { Heading, Stack } from '@chakra-ui/core'

import privacy from '../privacy'

export default function KnowMore() {
  const mapState = () => privacy.map(p => ({ [p.name]: false }))

  const [state, setState] = useState(mapState)

  const showCollapse = name => {
    const newArr = state.filter(elem => {
      if (Object.keys(elem)[0] === name) {
        elem = !elem
        return elem
      }
    })
    setState(newArr)
  }

  return (
    <Stack mt={20} px={24} py={10} spacing={20}>
      <Heading
        as="h2"
        pos="absolute"
        fontWeight="semibold"
        fontSize="100px"
        color="mmheading"
        mt="-70px"
        right={24}
      >
        KNOW MORE
      </Heading>
      {privacy.map(({ content, title, name }, idx) => (
        <CollapsePoint
          show={state[idx][idx]}
          handleShow={showCollapse}
          content={content}
          title={title}
          key={name}
          name={name}
        />
      ))}
    </Stack>
  )
}
