import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Roll from 'react-reveal/Roll'

function HighlightGrid() {
  return (
    <Container>
      <Roll left ssrFadeout>
        <CardWrapper>
          <Card>
            <ImageContainer>
              <MyImage src="/coin.png" layout="fill" alt="coin" />
            </ImageContainer>

            <DescriptionTitle>Access to $30 Trillion Market</DescriptionTitle>
            <Description>
              Hive Capital is bringing the Stock Market to investment DAOs. This
              automated system allows the DAO to invest in companies on the
              stock market to grow the treasury over time.
            </Description>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <ImageContainer>
              <MyImage src="/money.png" layout="fill" alt="money" />
            </ImageContainer>

            <DescriptionTitle>Distributed Decision Making</DescriptionTitle>
            <Description>
              Compared to most investment funds Hive Capital&apos;s decisions
              will come from all of its members. The Hive Mind of the DAO will
              work together to find the best investments.
            </Description>
          </Card>
        </CardWrapper>
      </Roll>

      <Roll right ssrFadeout>
        <CardWrapper>
          <Card>
            <ImageContainer>
              <MyImage src="/blockchain.png" layout="fill" alt="blockchain" />
            </ImageContainer>

            <DescriptionTitle>Built on Milkomeda/Cardano</DescriptionTitle>
            <Description>
              This allows for interopolbility between different blockchains and
              their native assets, as well as fast decision making and low
              transaction fees.
            </Description>
          </Card>
        </CardWrapper>

        <CardWrapper>
          <Card>
            <ImageContainer>
              <MyImage src="/stocks.png" layout="fill" alt="stocks" />
            </ImageContainer>

            <DescriptionTitle>Build and Grow Together</DescriptionTitle>
            <Description>
              All members incentives are aligned to increase the value of the
              DAO.
            </Description>
          </Card>
        </CardWrapper>
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

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  border: 2px solid white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  /* width: 85%; */
  height: 300px;
  width: 70%;

  @media screen and (min-width: 1300px) {
    width: 100%;
  }
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
  text-align: center;
`

const Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 8px;
  text-align: center;
  color: #ffffff;
  width: 90%;
`
