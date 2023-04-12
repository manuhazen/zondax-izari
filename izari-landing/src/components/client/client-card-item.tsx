import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Client } from '@/interfaces/client'

interface Props {
  item: Client
}

const ClientCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>
            {/* eslint-disable-next-line */}
            <img src={item.company?.logo} alt={item.company?.name + ' logo'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ClientCardItem
