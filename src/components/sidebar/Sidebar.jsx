import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const SideBar = ({ children }) => {
  const menuItem = [
    {
      path: "/courses",
      name: "Courses",
    },
    {
      path: "/anouncements",
      name: "Anouncements",
    },
    {
      path: "/notifications",
      name: "Notifications",
    },
    {
      path: "/schedule",
      name: "Schedule",
    },
  ]
  return (
    <Container>
      <SideBarStyle>
        <TopSection>
          <h1>Logo</h1>
        </TopSection>
        {menuItem.map((item, index) => (
          <LinkStyle to={item.path} key={index}>
            <LinkText>{item.name}</LinkText>
          </LinkStyle>
        ))}
      </SideBarStyle>
      <MainStyle>{children}</MainStyle>
    </Container>
  )
}

export default SideBar

const Container = styled.div`
  display: flex;
`
const MainStyle = styled.main`
  width: 100%;
  padding: 0px;
`

const SideBarStyle = styled.div`
  background: #000;
  color: #fff;
  height: 100vh;
  width: 250px;
`

const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
`

const LinkStyle = styled(NavLink)`
  display: flex;
  color: #fff;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  :hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
  &.active {
    background: lightskyblue;
    color: #000;
  }
`
const LinkText = styled.div`
  font-size: 20px;
`
