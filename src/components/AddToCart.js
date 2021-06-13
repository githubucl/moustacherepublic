import React, { useState } from 'react'
import styled from 'styled-components'

import { useCartContext } from '../context/cart_context'


const AddToCart = ({ size }) => {
  const { addToCart } = useCartContext()
  const [text, setText] = useState('')

  return (
    <Wrapper>

      <div className='btn-container'>

        <button

          className='btn'
          onClick={() => {
            if (size) {
              addToCart(size)
              setText('')
            } else {
              setText('Please select a size')
            }
          }}
        >
          ADD TO CART
        </button>
        <p>
          {text}
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;

  .btn:hover {
    background-color: black;
    color: white;
  }
`
export default AddToCart
