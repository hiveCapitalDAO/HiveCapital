import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

function Tokenomics() {
  return (
    <Container>
      <TitleContainer>
        <Title>Tokenomics Distribution</Title>
      </TitleContainer>

      <GraphContainer>
        <ImageContainer>
          <Image
            src="/tokenomics.png"
            layout="fill"
            style={{ objectFit: 'contain', width: '100%' }}
          />
        </ImageContainer>
      </GraphContainer>

      <DescriptionContainer1>
        <DescriptionTitle>Public Offering (50%):</DescriptionTitle>
        <Description>
          There will be a ICO of 50,000,000 HIVE tokens for ~.50 ADA. 80% of
          this ADA will be placed in the Hive treasury to be used for
          investments, 10% will be given out to small businesses that were
          largely impacted by COVID-19, and the remaining 10% will be given to
          the founding/dev team to keep Hive Capital moving forward.{' '}
        </Description>
      </DescriptionContainer1>
      <DescriptionContainer2>
        <DescriptionTitle>DAO Treasury (30%):</DescriptionTitle>
        <Description>
          These HIVE tokens will be spent however the DAO sees fit.{' '}
        </Description>
      </DescriptionContainer2>
      <DescriptionContainer3>
        <DescriptionTitle>Small Business (10%):</DescriptionTitle>
        <Description>
          Give back to small businesses affected by COVID. Owning these tokens
          will help these business get a better understanding for blockchain and
          web3.{' '}
        </Description>
      </DescriptionContainer3>
      <DescriptionContainer4>
        <DescriptionTitle>Founding/Dev Team (10%):</DescriptionTitle>
        <Description>
          These tokens will be earned for getting Hive Capital off the ground
          and building an automated self governed system to manage and invest in
          stocks, crypto, and other assets. These will also be used to further
          the development of Hive Capital, with the influence of the DAO over
          which direction to take.{' '}
        </Description>
      </DescriptionContainer4>
    </Container>
  )
}

export default Tokenomics

const Container = styled.div`
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 60% 30%;
    grid-template-rows: auto auto auto auto;
    height: 100vh;
    width: 100vw;
  }
`

const TitleContainer = styled.div`
  background-color: #282828;
  border-radius: 20px;
  width: 80%;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    grid-row: 1;
    grid-column: 1;
    margin-left: 40px;
    margin-bottom: 0px;
  }
`

const Title = styled.div`
  padding: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  color: white;
  /* identical to box height */

  text-align: center;

  @media screen and (min-width: 1200px) {
    font-size: 58px;
  }
`

const GraphContainer = styled.div`
  background-color: #282828;
  border-radius: 20px;
  width: 80%;
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    grid-row: 2 / 5;
    grid-column: 1;
    margin-left: 40px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

  @media screen and (min-width: 1000px) {
    height: 600px;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    height: 400px;
  }
`

const DescriptionContainer1 = styled.div`
  height: auto;
  width: 80%;
  background-color: #282828;
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    grid-row: 1;
    grid-column: 2;
    width: 100%;
  }
`

const DescriptionContainer2 = styled.div`
  height: auto;
  width: 80%;
  background-color: #282828;
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    grid-row: 2;
    grid-column: 2;
    width: 100%;
  }
`

const DescriptionContainer3 = styled.div`
  height: auto;
  width: 80%;
  background-color: #282828;
  border-radius: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    grid-row: 3;
    grid-column: 2;
    width: 100%;
  }
`

const DescriptionContainer4 = styled.div`
  height: auto;
  width: 80%;
  background-color: #282828;
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    grid-row: 4;
    grid-column: 2;
    width: 100%;
  }
`

const DescriptionTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  padding: 10px;
  margin: 5px;
  color: #ffffff;
  border-bottom: 1px solid white;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

const Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: white;
  padding: 10px;

  @media screen and (min-width: 1400px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 20px;
  }
`
