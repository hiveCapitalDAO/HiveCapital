import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

function Footer() {
  return (
    <Container>
      <WhyText>Why Hive Capital?</WhyText>
      <ImageContainer>
        <Image
          src="/arrowRightWhyHive.png"
          layout="fill"
          style={{ objectFit: 'contain', width: '100%' }}
          alt="Circle arrow"
        />
      </ImageContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const WhyText = styled.div`
  font-size: 14px;
  color: white;
  font-size: 42px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 800;
  line-height: 70px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const ImageContainer = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
`
