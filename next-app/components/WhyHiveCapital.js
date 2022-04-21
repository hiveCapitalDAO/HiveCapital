import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useMediaQuery } from '@mui/material'

function WhyHiveCapital() {
  const matches = useMediaQuery('(min-width: 1200px)')
  const matches2 = useMediaQuery('(min-width: 768px)')
  return (
    <Container>
      <ImageGraphicContainer>
        <div>
          {!matches2 && <Image src="/flowChart.png" width={264} height={323} />}
          {!matches && matches2 && (
            <Image src="/flowChart.png" width={424} height={483} />
          )}
          {matches && <Image src="/flowChart.png" width={624} height={683} />}
        </div>
      </ImageGraphicContainer>

      <DescriptionContainer>
        <DescriptionWrapped>
          <Title>The Peoples Investment Fund</Title>
          <Description>
            Take part in connecting DAO governance with the current financial
            system today to build a strong investment fund for the people to
            fight back.
          </Description>
          <Title>Own a pieace of a bigger pie</Title>
          <Description>
            Join in building a diverse portfolio with both on and off chain
            assets
          </Description>
          <Title>Own a pieace of a bigger pie</Title>
          <Description>
            Join in building a diverse portfolio with both on and off chain
            assets
          </Description>
        </DescriptionWrapped>
      </DescriptionContainer>
    </Container>
  )
}

export default WhyHiveCapital

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, black, #222222);

  @media (min-width: 1024px) {
    display: flex;
  }
`

const ImageGraphicContainer = styled.div`
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50%;
  flex: 1;

  @media (min-width: 768px) {
    /* justify-content: start; */
    padding-left: 40px;
  }

  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  }
`

const DescriptionWrapped = styled.div`
  margin-top: 40px;
`

const Title = styled.div`
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;

  @media (min-width: 481px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`

const Description = styled.p`
  font-family: Inter, sans-serif;
  color: white;
  width: 300px;
  font-size: 12px;

  @media (min-width: 481px) {
    font-size: 20px;
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    /* font-size: 20px; */
    width: 400px;
  }

  @media (min-width: 1200px) {
    font-size: 25px;
    width: 600px;
  }
`
