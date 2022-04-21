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
  height: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`

const WhyText = styled.div`
  font-size: 14px;
  color: white;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  padding-bottom: 15px;
  border-bottom: 2px solid #fbbf84;
`
