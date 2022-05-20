import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'

function Body() {
  return (
    <Container>
      <InfoContainer>
        <InfoCard>
          <InfoTitle>Hive Capital DAO</InfoTitle>
          <Description>
            Self governed entity autonomously investing into both on-chain and
            off-chain assets to accrue value for all members. Combining Defi and
            blockchain governance with legacy financial systems.{' '}
          </Description>

          <Link href="/app">
            <LaunchAppBtn>Launch App</LaunchAppBtn>
          </Link>
        </InfoCard>
      </InfoContainer>

      <RightContainer>
        <ImageContainer>
          <CoolImage
            src={'/investmentImg.png'}
            alt="Investment image"
            layout="fill"
          />
        </ImageContainer>
      </RightContainer>
    </Container>
  )
}

export default Body

const Container = styled.div`
  height: 75%;
  width: 100%;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`

const InfoContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 100%;
    /* height: 50%; */
  }
`

const InnerInfoContainer = styled.div`
  margin-left: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;

  @media (max-width: 1100px) {
    margin-left: 0px;
    justify-content: center;
  }
`

const InfoCard = styled.div`
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
  border-radius: 80px;
  width: 80%;
  /* margin-left: 40px; */

  @media (max-width: 1100px) {
    /* height: 70%; */
    width: 65%;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
  }
`

const InfoTitle = styled.div`
  background-image: linear-gradient(to top, #fbbf84, #ffe2b7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  text-align: center;
  z-index: 100;

  font-size: 75px;
  font-weight: bold;
  font-family: Inter, sans-serif;
  letter-spacing: 3px;

  @media (max-width: 1400px) {
    font-size: 80px;
    /* margin-top: 200px; */
  }

  @media (max-width: 1100px) {
    font-size: 60px;
    /* margin-top: 150px; */
  }

  @media (max-width: 768px) {
    font-size: 55px;
    /* margin-top: 100px; */
  }

  @media (max-width: 598px) {
    font-size: 30px;
  }
`

const Description = styled.div`
  font-size: 25px;
  color: white;
  width: 650px;
  text-align: start;
  letter-spacing: 1.75px;
  margin-top: 20px;

  @media (max-width: 1400px) {
    width: 500px;
    /* margin-top: 200px; */
  }

  @media (max-width: 1100px) {
    width: 550px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 450px;
    font-size: 20px;
  }

  @media (max-width: 598px) {
    width: 325px;
    font-size: 12px;
    text-align: center;
  }
`

const LaunchAppBtn = styled(Button)`
  background-image: linear-gradient(to top, silver, darkgrey);
  color: black;
  margin-top: 40px;
  font-size: 22px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  transition: all 250ms;
  border-radius: 8px;
  padding: 10px;
  height: 50px;
  text-transform: none;
  border: 1px solid silver;

  &:hover {
    /* color: white; */
    background-image: linear-gradient(to top, silver, darkgrey);
    opacity: 0.8;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    height: 35px;
  }
`

const RightContainer = styled.div`
  /* width: 100%;
  height: 100%; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: block;
  position: relative;

  @media (max-width: 1100px) {
    width: 100%;
    /* height: 50%; */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`

const CoolImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  position: relative;
`
