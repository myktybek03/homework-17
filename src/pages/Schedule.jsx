import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Schedule = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <p>Schedule</p>
      <Button onClick={() => navigate("/notifications")}>
        Go to Notifications page
      </Button>
    </Container>
  )
}

export default Schedule

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
