import React from 'react'
import styled from 'styled-components'
import teePic from '../assets/classic-tee.jpeg'


const CartItem = ({ item, cart }) => {


  return (
    <Wrapper>
      <div className='title'>
        <img src={teePic} alt='teePic' />
        <div>
          <div className='name'>Classic Tee</div>
          <div className='price'> {item.amount} x <h5>$75.00</h5>  </div>
          <div className='size'>{item.size}</div>
        </div>
      </div>



    </Wrapper>
  )
}

const Wrapper = styled.div`
 height:60px;
  display: grid;
  grid-template-columns: 240px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 5rem;
  align-items: center;
  div{
    font-size:12px;
  }
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: start;
    text-align: left;
    gap: 1rem;
    background:white;
    // display:none;
    padding:10px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
    display:inline-block;
  }

  
  
`

export default CartItem
