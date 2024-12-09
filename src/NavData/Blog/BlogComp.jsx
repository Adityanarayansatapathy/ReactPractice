
import React from 'react'
import { HeaderComp } from '../Header/HeaderComp'
import { productData } from '../Data/BlobData'
import { Blog } from './Blog.css'
import { Link, useLocation } from 'react-router-dom'


export  function BlogComp() {


  return (
    <div>
        <HeaderComp/>

    <div className="productDiv">
           {
               productData.map((prod,index)=>{
                   return (
                       <div key={index} >
                    <h3>{prod.productName}</h3>
                    <p>{prod.category}</p>
                     <h4>Price: &nbsp; &#8377; {prod.price}</h4>
                    <button > <Link to={`/product/${prod.productId}`}>Show Details</Link></button>
                  </div>
                )
                
            })
        }
    </div>
</div>
  )
}

export function ShowProductDetails(){
    const location = useLocation();
    const id = parseInt(location.pathname.split('/')[2], 10);
    console.log(id);

    return (
        <div>
            <HeaderComp/>
            <h1>Product Details</h1>

{
        productData.map((product,index)=>{
            if(id === index+1){
                return (
                    <div className="product-details">
                    <h3>{product.productName}</h3>
                    <p>Category: {product.category}</p>
                    <h4>Price: ₹ {product.price}</h4>
                    <p>Description: {product.description}</p>
                    </div>
                )
                
            }
        })
        }
        </div>
    )
}
