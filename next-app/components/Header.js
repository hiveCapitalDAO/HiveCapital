import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Drawer from '@mui/material/Drawer'
import Link from 'next/link'

function Header() {
  const [drawerState, setDrawerState] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerState(open)
  }

  return (
    <Container>
      <LogoContainer>
        <Image
          src={'/hivecapital-17.png'}
          alt="Header Logo"
          width={598}
          height={176}
        />
      </LogoContainer>

      <PullOutIconContainer>
        <Drawer
          anchor="right"
          open={drawerState}
          onClose={toggleDrawer('right', false)}
        >
          <DrawerContainer>
            <Text
              onClick={() => {
                window.scrollTo(0, 1000)
                setDrawerState(false)
              }}
            >
              Overview
            </Text>

            <Link href="https://hivecapitaldao.gitbook.io/whitepaper/" passHref>
              <Text target="_blank">Whitepaper</Text>
            </Link>

            <Text
              onClick={() => {
                window.scrollTo(0, 5000)
                setDrawerState(false)
              }}
            >
              FAQ
            </Text>

            <Text
              onClick={() => {
                window.scrollTo(0, 5000)
                setDrawerState(false)
              }}
            >
              Connect
            </Text>

            <Link href="/app" passHref>
              <EnterAppBtn>Enter App</EnterAppBtn>
            </Link>
          </DrawerContainer>
        </Drawer>

        <PulloutIcon onClick={toggleDrawer('right', true)} />
      </PullOutIconContainer>

      <HeadersButtonsContainer>
        <Text onClick={() => window.scrollTo(0, 1000)}>Overview</Text>

        <Link href="https://hivecapitaldao.gitbook.io/whitepaper/" passHref>
          <Text target="_blank">Whitepaper</Text>
        </Link>

        <Text onClick={() => window.scrollTo(0, 3000)}>FAQ</Text>
        <Text onClick={() => window.scrollTo(0, 4000)}>Connect</Text>

        <Link href="/app" passHref>
          <EnterAppBtn>Enter App</EnterAppBtn>
        </Link>
      </HeadersButtonsContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 10%;
  width: 100%;
  /* position: relative; */
  display: flex;
`

const LogoContainer = styled.div`
  position: relative;
  left: 0;
  top: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
`

const HeadersButtonsContainer = styled.div`
  position: relative;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 90px;
  @media (max-width: 768px) {
    margin-right: 40px;
    display: none;
  }
`

const EnterAppBtn = styled(Button)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  background-color: white;
  color: #cd8b33;

  text-transform: none;
  padding: 10px;
  height: 35px;
  transition: all 250ms;

  &:hover {
    background-color: #fbbf84;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 10px;
    width: 120px;
  }
`
const Text = styled.a`
  color: white;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin-right: 35px;
  transition: all 250ms;

  &:hover {
    border-bottom: 2px solid white;
    cursor: pointer;
    padding: 2px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 10px;

    &:hover {
      border-bottom: none;
      padding: 0px;
    }
  }
`

const PullOutIconContainer = styled.div`
  position: relative;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`

const PulloutIcon = styled(DragHandleIcon)`
  display: none;
  color: white;
  font-size: 35px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const DrawerContainer = styled.div`
  background: linear-gradient(to top, black, #222222);
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
`
