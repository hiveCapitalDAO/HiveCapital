import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'

function Body() {
  const matchces = useMediaQuery('(min-width: 1100px) ')
  const matchces2 = useMediaQuery('(min-height: 700px)')
  const matchces3 = useMediaQuery('(min-height: 1200px)')
  return (
    <Container>
      <InfoContainer>
        <InnerInfoContainer>
          <InfoTitle>Hive Capital DAO</InfoTitle>
          <Description>
            Self governed entity autonomously investing into publicly traded
            companies on the stock market to accrue value for all members.
            Combining Defi and blockchain governance with legacy financial
            systems. Built on top of the Milkomeda Cardano Sidechain for
            interoperability.{' '}
          </Description>
          <LaunchAppBtn>Launch App</LaunchAppBtn>
        </InnerInfoContainer>
      </InfoContainer>
      <ImageContainer>
        {matchces && (
          <Image
            src={'/investmentImg.png'}
            alt="Investment image"
            height={459}
            width={598}
          />
        )}
        {!matchces && matchces2 && !matchces3 && (
          <Image
            src={'/investmentImg.png'}
            alt="Investment image"
            height={220}
            width={300}
          />
        )}
        {!matchces2 && (
          <Image
            src={'/investmentImg.png'}
            alt="Investment image"
            height={150}
            width={150}
          />
        )}

        {matchces3 && (
          <Image
            src={'/investmentImg.png'}
            alt="Investment image"
            height={459}
            width={598}
          />
        )}
      </ImageContainer>
    </Container>
  )
}

export default Body

const Container = styled.div`
  height: 93%;
  width: 100%;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const InfoContainer = styled.div`
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%;
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

const InfoTitle = styled.div`
  background-image: linear-gradient(to top, #fbbf84, #ffe2b7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  text-align: center;
  z-index: 100;

  font-size: 80px;
  font-weight: bold;
  font-family: Inter, sans-serif;
  letter-spacing: 3px;

  @media (max-width: 1400px) {
    font-size: 80px;
    /* margin-top: 200px; */
  }

  @media (max-width: 1100px) {
    font-size: 60px;
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    font-size: 55px;
    margin-top: 100px;
  }

  @media (max-width: 598px) {
    font-size: 35px;
  }
`

const Description = styled.div`
  font-size: 25px;
  color: white;
  width: 700px;
  text-align: start;
  letter-spacing: 1.5px;
  margin-top: 20px;

  @media (max-width: 1400px) {
    width: 550px;
    /* margin-top: 200px; */
  }

  @media (max-width: 1250px) {
    width: 475px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 500px;
    font-size: 20px;
  }

  @media (max-width: 598px) {
    width: 350px;
    font-size: 18px;
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

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`
