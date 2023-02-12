import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Notifications = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <h2>Notifications</h2>
      <Button onClick={() => navigate("/courses/materials")}>
        Go to Materials page
      </Button>
    </Container>
  )
}

export default Notifications

const Container = styled.div`
  height: 100vh;
  background-color: aquamarine;
  padding: 10px;
  margin: 0 15px;
`

const Button = styled.button`
  text-align: center;
  padding: 10px 30px;
  background-color: #19ae9f;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
