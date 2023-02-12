import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const students = [
  {
    title: "Student 1",
    id: "1",
  },
  {
    title: "Student 2",
    id: "2",
  },
]

const Students = () => {
  const navigate = useNavigate()

  return (
    <div>
      <StyledUl>
        {students.map((student) => (
          <StyledLi key={student.id}>
            {student.title}
            <Button onClick={() => navigate(`${student.id}/detail`)}>
              Detail
            </Button>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  )
}

export default Students

const StyledUl = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  width: 600px;
`

const StyledLi = styled.li`
  background-color: antiquewhite;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 10px;
  justify-content: space-between;
`
const Button = styled.button`
  text-align: center;
  padding: 10px 20px;
  background-color: #19ae9f;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
