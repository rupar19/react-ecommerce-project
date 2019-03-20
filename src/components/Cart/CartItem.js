import React from 'react';

export default function CartItem({item,value}){
    const{id,title,img,price,total,count}=item;
    const{increment,decrement,removeItem}=value;
    return(
        <div className='row my-2 text-capitalize text-center'>
        <div className='col-10 mx-auto col-lg-2 '>
        <img src={img}
        style={{width:'5rem',height:'5rem'}}
        alt='product'
        className='img-fluid'/>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product:</span>
        {title}
        </div>
        <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price:</span>
        {price}
        </div>
        <div className='col-10 mx-auto col-lg-2 my-2 my-col-lg-0'>
        <div className ='d-flex justify-content-center'>
        <span className='btn btn-gold mx-1' onClick={()=>decrement(id)}>-</span>
        <span className='btn btn-gold mx-1'>{count}</span>
        <span className='btn btn-gold mx-1' onClick={()=>increment(id)}>+</span>
        </div> 
        </div> 
        <div className='col-10 mx-auto col-lg-2' onClick={()=>removeItem(id)}>
        <div className='cart-icon'>
        <i className='fas fa-trash'></i>
        </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
        <strong>item total : £{total}</strong>
        </div>   
        </div>
        
    )
        
}