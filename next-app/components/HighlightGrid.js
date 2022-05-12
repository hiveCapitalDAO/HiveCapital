import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Roll from 'react-reveal/Roll'

function HighlightGrid() {
  return (
    <Container>
      <Roll left ssrFadeout>
        <Card>
          <ImageContainer>
            <MyImage src="/coin.png" layout="fill" />
          </ImageContainer>

          <DescriptionTitle>Access to $30 Trillion Market</DescriptionTitle>
          <Description>
            Hive Capital is brining the Stock Market to investment DAOs. This
            automated system allows the DAO to invest in companies on the stock
            market to grow the treasury over time.{' '}
          </Description>
        </Card>

        <Card>
          <ImageContainer>
            <MyImage src="/money.png" layout="fill" />
          </ImageContainer>

          <DescriptionTitle>Distributed Decision Making</DescriptionTitle>
          <Description>
            Compared to most investment funds Hive Capital's decisions will come
            from all of its members. The Hive Mind of the DAO will work together
            to find the best investments.
          </Description>
        </Card>
      </Roll>

      <Roll right ssrFadeout>
        <Card>
          <ImageContainer>
            <MyImage src="/blockchain.png" layout="fill" />
          </ImageContainer>

          <DescriptionTitle>Built on Milkomeda/Cardano</DescriptionTitle>
          <Description>
            This allows for interopolbility betweem different blockchains and
            their native assets, as well as fast decision making and low
            transaction fees.
          </Description>
        </Card>

        <Card>
          <ImageContainer>
            <MyImage src="/stocks.png" layout="fill" />
          </ImageContainer>

          <DescriptionTitle>Build and Grow Together</DescriptionTitle>
          <Description>
            All members incentives are aligned to increase the value of the DAO.{' '}
          </Description>
        </Card>
      </Roll>
    </Container>
  )
}

export default HighlightGrid

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media screen and (min-width: 768px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`

const Card = styled.div`
  background-color: #282828;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  /* width: 85%; */
  height: 400px;
`

const ImageContainer = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
`

const MyImage = styled(Image)`
  object-fit: contain;
  width: 100%;
`

const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Inter';
  font-style: normal;
  color: #ffffff;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  width: 90%;
`
