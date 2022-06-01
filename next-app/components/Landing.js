import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

function Landing() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  )
}

export default Landing

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: -webkit-fill-available;
  /* background: linear-gradient(to top, black, #222222); */
`
