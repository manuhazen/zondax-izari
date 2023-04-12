import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { StyledButton } from '../styled-button'
import { useMediaQuery, useTheme } from '@mui/material'

const Playground: FC = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
          Web3 is the Future!
        </Typography>
        <Typography sx={{ mb: 6 }}>
          Web3 is the future because it offers a decentralized, secure, and transparent way to interact with the
          internet, enabling a wide range of new possibilities and empowering individuals to take control of their
          digital lives.
        </Typography>

        {isDesktop ? (
          <Box>
            <iframe title="Web3 Playground" src="https://web3playground.io/" width="100%" height="600" />
          </Box>
        ) : (
          <Box sx={{ mb: 1 }}>
            <Link href="https://web3playground.io/" passHref>
              <StyledButton size="large">
                <Typography>Test the Web3 Playground </Typography>
              </StyledButton>
            </Link>
          </Box>
        )}

        {/* useful links to Web3 playground */}
        <Box>
          <Link href="https://github.com/nachomazzara/web3playground#how-it-works" passHref>
            <StyledButton size="large">
              <Typography>How it works this playground </Typography>
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Playground
