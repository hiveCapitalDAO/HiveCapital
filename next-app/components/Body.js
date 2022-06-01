import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const NFTCard = dynamic(() => import('./NFT'), {
  ssr: false,
})

function Body() {
  return (
    <Container>
      <InfoContainer>
        <InfoTitle>Hive Capital DAO</InfoTitle>
        <Description>
          Self governed entity autonomously investing into both on-chain and
          off-chain assets to accrue value for all members. Combining Defi and
          blockchain governance with legacy financial systems.{' '}
        </Description>

        <Link href="/app" passHref>
          <LaunchAppBtn>Launch App</LaunchAppBtn>
        </Link>
      </InfoContainer>

      <RightContainer>
        <NFTCard />
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
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-left: 40px; */

  @media screen and (min-width: 1100px) {
    padding-left: 40px;
    width: 50%;
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
  /* background-color: #282828; */
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
  color: white;
  text-align: center;
  z-index: 100;

  font-size: 30px;
  font-weight: 900;
  font-family: Archivo;
  letter-spacing: 3px;

  @media screen and (min-width: 1300px) {
    font-size: 70px;
  }

  @media screen and (min-width: 768px) and (max-width: 1300px) {
    font-size: 60px;
  }

  @media screen and (min-width: 500px) and (max-width: 768px) {
    font-size: 40px;
  }
`

const Description = styled.div`
  font-size: 14px;
  color: white;
  width: 80%;
  text-align: center;
  letter-spacing: 1.75px;
  margin-top: 20px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    /* width: 700px; */
  }

  @media screen and (min-width: 500px) and (max-width: 768px) {
    font-size: 18px;
    /* width: 400px; */
  }
`

const LaunchAppBtn = styled(Button)`
  /* background-image: linear-gradient(to top, silver, darkgrey); */
  background-color: white;
  color: #cd8b33;
  margin-top: 40px;
  font-size: 22px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  transition: all 250ms;
  border-radius: 8px;
  padding: 10px;
  height: 50px;
  text-transform: none;
  /* border: 1px solid silver; */

  &:hover {
    background-color: white;
    /* color: white; */
    /* background-image: linear-gradient(to top, silver, darkgrey); */
    opacity: 0.8;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    height: 35px;
  }
`

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1100px) {
    width: 50%;
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
