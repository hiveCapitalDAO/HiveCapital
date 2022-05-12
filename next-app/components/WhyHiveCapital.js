import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useMediaQuery } from '@mui/material'
import Fade from 'react-reveal/Fade'

function WhyHiveCapital() {
  const matches = useMediaQuery('(min-width: 1200px)')
  const matches2 = useMediaQuery('(min-width: 768px)')
  return (
    <Container id="overview">
      <Card>
        <ImageGraphicContainer>
          <MyImage src="/flowChart.png" layout="fill" />
        </ImageGraphicContainer>

        <DescriptionContainer>
          <DescriptionWrapped>
            <Fade right cascade ssrFadeout>
              <DescriptionCard>
                <Title>The Peoples Investment Fund</Title>
                <Description>
                  An investment fund managed by its members through a fair
                  governance system. On a mission to shake up wall street and
                  bring power to retail investors.
                </Description>
              </DescriptionCard>

              <DescriptionCard>
                <Title>Access to a larger market</Title>
                <Description>
                  Be apart of the first investment DAO to autonomously purchase
                  shares of publicly traded companies.
                </Description>
              </DescriptionCard>

              <DescriptionCard>
                <Title>Help fund small buisness</Title>
                <Description>
                  10% of the funds raised from the ICO will be used as grants to
                  small businesses that were affected by COVID-19.
                </Description>
              </DescriptionCard>
            </Fade>
          </DescriptionWrapped>
        </DescriptionContainer>
      </Card>
    </Container>
  )
}

export default WhyHiveCapital

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(to bottom, black, #222222, black); */
`

const Card = styled.div`
  background: #282828;
  border-radius: 80px;
  width: 95%;
  height: 90%;
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const ImageGraphicContainer = styled.div`
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;

  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
    /* margin-left: 40px; */
  }

  @media (max-width: 768px) {
    height: 50%;
  }
`

const MyImage = styled(Image)`
  object-fit: scale-down;
  width: 100%;
`

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;

  /* @media (max-width: 768px) {
    height: 55%;
  } */

  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 70px;
  }
`

const DescriptionWrapped = styled.div`
  /* margin-top: 40px; */
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 1100px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 50px;
  }
`

const DescriptionCard = styled.div`
  /* border: 2px solid #fbbf84; */
  border-radius: 12px;
  /* padding: 8px; */
  margin-top: 8px;
  margin-bottom: 8px;
  /* height: 100px; */

  @media (min-width: 768px) {
    /* margin: 20px; */
    /* padding: 10px; */
  }
`

const Title = styled.div`
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: white;
  background-image: linear-gradient(to top, #fbbf84, #ffe2b7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  @media (min-width: 481px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 900px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 35px;
  }
`

const Description = styled.p`
  font-family: Inter, sans-serif;
  color: white;
  width: 300px;
  font-size: 12px;

  @media (min-width: 481px) {
    font-size: 14px;
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 600px;
    font-size: 16px;
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
