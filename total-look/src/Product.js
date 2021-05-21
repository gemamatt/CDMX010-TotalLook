import React from 'react'

function Product(props) {
    return(
        <>
            <div>
                <img src={props.p.img} alt="bolsa"/>
                <p>{props.p.name}</p>
                <p>$ {props.p.price}</p>
            </div>
        </>
    );   
}

export default Product;