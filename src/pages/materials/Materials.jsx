import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Modal from "../../components/UI/Modal"
import styled from "styled-components"

const materials = [
  {
    title: "Material1",
    id: 1,
  },
  {
    title: "Material2",
    id: 2,
  },
]

const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const openModalHandler = () => {
    searchParams.set("modal", "addNewMaterial")
    setSearchParams(searchParams)
  }

  const closeModalHandler = () => {
    searchParams.delete("modal")
    setSearchParams(searchParams)
  }
  return (
    <>
      {searchParams.has("modal") ? <Modal onClose={closeModalHandler} /> : null}
      <ButtonModal onClick={openModalHandler}>Add new material</ButtonModal>
      <Container>
        <ul>
          {materials.map((material) => (
            <li key={material.id}>
              <p>{material.title}</p>
              <Button onClick={() => navigate(`${material.id}/detail`)}>
                Details
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default Materials

const Container = styled.div`
  margin: 10px;
  margin-top: 20px;
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  li {
    border: 2px solid #4f4fd0;
    margin-top: 20px;
    display: flex;
    width: 700px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }
`

const Button = styled.button`
  text-align: center;
  padding: 20px 30px;
  background-color: #19ae9f;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
const ButtonModal = styled.button`
  text-align: center;
  padding: 20px 30px;
  background-color: orange;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
