import React from 'react'
import { Box, Flex, Icon, Text, Divider, Collapse } from '@chakra-ui/core'

export default function CollapsePoint({ show, handleShow, title, content, name }) {
  return (
    <Box mb={16}>
      <Flex justify="space-between">
        <Text fontWeight="bold" fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}>
          {title.toUpperCase()}
        </Text>
        <Icon
          cursor="pointer"
          zIndex="99"
          onClick={e => handleShow(name)}
          name="chevron-down"
          size="40px"
        />
      </Flex>
      <Divider borderColor="mmorange" borderWidth="3px" />
      <Collapse startingHeight={20} mt={4} isOpen={show}>
        {content}
      </Collapse>
    </Box>
  )
}
