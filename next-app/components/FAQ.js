import React, { useState } from 'react'
import styled from '@emotion/styled'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function FAQ() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <Container id="faq">
      <FaqTitle>FAQ</FaqTitle>
      <AccordianContainer>
        <CustomAccordian
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: '33%', flexShrink: 0 }}
              style={{ color: 'white' }}
            >
              +
            </Typography>
            <Question sx={{ color: 'text.secondary' }}>
              How does the DAO have ownership over the stocks?
            </Question>
          </AccordionSummary>
          <AccordionDetails>
            <Answer>
              The Hive Capital DAO LLC is legally binded to execute only the
              actions and wishes of the DAO that are voted on chain.
            </Answer>
          </AccordionDetails>
        </CustomAccordian>
        <CustomAccordian
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: '33%', flexShrink: 0 }}
              style={{ color: 'white' }}
            >
              +
            </Typography>
            <Question sx={{ color: 'text.secondary' }}>
              Is there on chain governance?
            </Question>
          </AccordionSummary>
          <AccordionDetails>
            <Answer>
              Yes, all governance is done on chain and can be easily audited.
              There is no reliance on a single person to purchase any assets, it
              is all done autonomously.
            </Answer>
          </AccordionDetails>
        </CustomAccordian>
        <CustomAccordian
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: '33%', flexShrink: 0 }}
              style={{ color: 'white' }}
            >
              +
            </Typography>
            <Question sx={{ color: 'text.secondary' }}>
              How do I get started?
            </Question>
          </AccordionSummary>
          <AccordionDetails>
            <Answer>Join the Discord </Answer>
          </AccordionDetails>
        </CustomAccordian>
      </AccordianContainer>
    </Container>
  )
}

export default FAQ

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FaqTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: white;
  margin: 20px;
`

const AccordianContainer = styled.div`
  width: 80%;
`

const CustomAccordian = styled(Accordion)`
  border: 2px solid white;
  background-color: transparent;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Question = styled(Typography)`
  color: white;
  font-size: 25px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const Answer = styled(Typography)`
  color: white;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
