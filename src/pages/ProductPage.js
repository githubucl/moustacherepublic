import React, { useState } from 'react'
import styled from 'styled-components'
import { sizes } from '../utils/constants'
import { ProductImage, Error, Loading, AddToCart } from '../components'

const ProductPage = () => {

  const [size, setSize] = useState(null)

  const selectSize = (e, s) => {


    if (size === s) {
      setSize(null)

    } else {
      setSize(s)

    }
  }
  return (
    <Wrapper>
      <div className='section section-center page'>

        <div className=' product-center'>
          <ProductImage />
          <section className='content'>
            <div className="title">Classic Tee</div>
            <hr />
            <h5 className='price'>$75.00 </h5>
            <hr />
            <p className='desc'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p className='info'>
              <span>SIZE<span className='star'>*</span> {size}</span>


            </p>
            <ul className='info'>
              {
                sizes.map((s, index) => {
                  return (
                    <li key={index} className={`${size === s ? 'sizeActive' : 'size'}`} onClick={(e) => selectSize(e, s)}>
                      {s}
                    </li>
                  )
                })
              }

            </ul>
            <AddToCart size={size} />


          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .title{
    font-size:28px;
    font-weight:300;
    height:70px;
    color:var(--clr-fontColor-1);
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
 
  .star{
    color:var( --clr-star)
  }
  .price {
    margin:10px 0px 10px 0px;
  
  }

  .size{
    display:inline-block;
width:40px;
height:40px;
text-align:center;
line-height:40px;
color:var(--clr-fontColor-2);
    margin-right:6px;
   cursor:pointer;
   user-select: none;
    border:1px solid var(--clr-borderLightGrey)
  }
  .sizeActive{
    display:inline-block;
    width:40px;
    height:40px;
    text-align:center;
    line-height:40px;
    user-select: none;
    cursor:pointer;
        margin-right:6px;
    border: 2px solid var(--clr-borderDarkGrey);
  }
  .desc {
  margin-top:20px;
    line-height: 2;
    max-width: 45em;
    color:var(--clr-fontColor-2);
  }
  .info {
    text-transform: capitalize;
    margin-top:20px;
    color:var(--clr-fontColor-2);
  }
  h2{
    margin:10px 0px 30px 0px ;
  }

  @media (min-width: 700px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default ProductPage
