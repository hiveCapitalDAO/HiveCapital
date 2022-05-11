import React from 'react'
import styled from '@emotion/styled'

function Footer() {
  return (
    <Container>
      <WhyText>Why Hive Capital?</WhyText>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 12%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`

const WhyText = styled.div`
  font-size: 14px;
  color: white;
  font-size: 58px;
  font-family: Inter, sans-serif;
  font-weight: 800;
  padding-bottom: 15px;
  border-bottom: 2px solid #fbbf84;
  line-height: 70px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`
