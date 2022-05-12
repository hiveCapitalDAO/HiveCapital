import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

function ExploreWhitepaper() {
  return (
    <Container>
      <Wrapper
        href="https://hivecapitaldao.gitbook.io/whitepaper0.1/"
        target="_blank"
      >
        <ExploreText>Explore Whitepaper</ExploreText>
        <ImageContainer>
          <Image
            src="/circlearrow.png"
            layout="fill"
            style={{ objectFit: 'contain', width: '100%' }}
          />
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}

export default ExploreWhitepaper

const Container = styled.div`
  height: auto;
  width: 100%;
`

const Wrapper = styled.a`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px;
`

const ExploreText = styled.div`
  /* font-family: Inter, sans-serif; */
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  text-align: center;
  color: white;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 58px;
  }
`

const ImageContainer = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
`
