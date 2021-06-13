import React, { useState } from 'react'
import styled from 'styled-components'
import teePic from '../assets/classic-tee.jpeg'
const ProductImage = () => {

  return (
    <Wrapper>
      <img src={teePic} alt='main' className='main' />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
    width:400px
  }
  img {
  
    display: block;

    object-fit: cover;
  }
 
  @media (max-width: 576px) {
   
    
  }
  @media (min-width: 992px) {
    .main {
      width: 400px;
    }
    
  }
`

export default ProductImage
