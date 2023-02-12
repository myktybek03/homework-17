import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

const Modal = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <ModalStyle>
          <h3>Add new material modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            laudantium expedita magni totam ea quam nemo earum illo aperiam
            molestias. Inventore vel aliquam nesciunt cum! Dolor illo quasi
            facilis reprehenderit!
          </p>
          <Button onClick={onClose}>Close modal</Button>
        </ModalStyle>,
        document.getElementById("modal")
      )}
    </>
  )
}

export default Modal

const ModalStyle = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 500px;
  padding: 15px 15px;
  background-color: pink;
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
