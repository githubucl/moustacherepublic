import React, { useRef } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { FaShoppingCart } from 'react-icons/fa'
import CartItem from './CartItem'


const CartContent = () => {

  const { cart } = useCartContext()

  const but = useRef()
  const menu = useRef()
  const cartMenuOpen = () => {
    but.current.className = 'button active'
    menu.current.style.display = 'block'
  }
  const cartMenuClose = () => {
    but.current.className = 'button '
    menu.current.style.display = 'none'
  }


  return (
    <Wrapper className="dropDown section-center"
      onMouseOver={
        cartMenuOpen
      }
      onMouseOut={
        cartMenuClose
      }
    >
      <button
        ref={but}
        type='button'
        className="button"


      >
        <div className="text">My Cart</div>
        <FaShoppingCart className="icon" />
        <div className="amount"> ( {cart.reduce((acc, cur) => {
          return acc = acc + cur.amount
        }, 0)} )</div>

      </button>
      <div className="menu" ref={menu}>

        {cart.length === 0 ? 'Empty' :
          cart.map((item, index) => {
            return <CartItem key={index} item={item} />
          })}

      </div>




    </Wrapper>
  )
}

const Wrapper = styled.div`

.dropDown:hover .dropDown>.menu{
  display: block;
}
.button {
  user-select: none;
  position:absolute;
  width:100px;
  height:32px;
  right:20%;
  margin-left:10px;
  color:var(--clr-fontColor-2);
 border:transparent;
 background:var( --clr-headerBackground)

}

.active{
  color:var(--clr-fontColor-1);
  border:1px solid var(--clr-borderLightGrey);
  border-bottom:2px solid white;
  z-index:1;
  background:white;
}
.menu{
  margin-top:29px;
  width:260px;
background:white;
border:1px solid var(--clr-borderLightGrey);
top:2px;
position:absolute;
right:20%;
display:none
}
.text{
 display:inline-block;
 margin-right:5px;
}
.amount{
  display:inline-block;
}
.icon{
  margin-right:2px;
  font-size:20px;
 
display:none
}
@media screen and (max-width: 700px) {
  .icon{
    display:inline-block;
   
  }
  .text{
    display:none;
    margin-right:4px;

  }
}

`
export default CartContent
