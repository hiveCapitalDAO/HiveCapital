import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

function HomePageFooter() {
  return (
    <Container>
      <JoinText>Join + Support</JoinText>
      <IconContainer>
        <ImageContainer>
          <Myimage src="/twitter.png" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Myimage src="/discord.png" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Myimage src="/github.png" layout="fill" />
        </ImageContainer>
      </IconContainer>
      <LlcText>@2022 Hive Capital DAO LLC</LlcText>
    </Container>
  )
}

export default HomePageFooter

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const JoinText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  text-align: center;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const ImageContainer = styled.div`
  height: 40px;
  width: 40px;
  margin: 8px;
  position: relative;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    transform: scale(1.06);
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

const Myimage = styled(Image)`
  object-fit: contain;
  width: 100%;
`

const LlcText = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: white;
  text-align: center;
`
