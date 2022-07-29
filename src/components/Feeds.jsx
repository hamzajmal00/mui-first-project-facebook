import { Box } from '@mui/system'
import React from 'react'
import { Posts } from './Posts'

export const Feeds = () => {
  return (
    <Box flex={4} p={2} sx={{marginLeft:{xs:0}}}>
      
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  )
}
