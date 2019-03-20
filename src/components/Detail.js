import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Detail extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {value => {
                    const {id,company,img,title,price,info,inCart} = value.detailProduct;
                    return(
                    <div className='container py-5'>
                    {/* title */}
                    <div className='row'>
                    <div className='col-10 mx-auto text-center text-slanted text-capitalize text-bright my-5'>
                    <h2>{title} </h2>
                    </div>
                    </div>
                {/* end of title */}
                {/*product info */}
                <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3 '>
                <img src={img}className='img-fluid'alt='product'/>
                </div>
                {/* product text*/}
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize text-blue'>
                <h1>Item: {title}</h1>
                <h2 className='text-title text-uppercase text-muted mt-3 mb-2'>
                Made by: <span className='text-uppercase'>{company}
                </span></h2>
                <h4 className='text-blue'>
                <strong>Price : <span>£ {price} </span></strong>
                </h4>
                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                Some info about product :</p>
                <p className='text-muted text-blue text-muted'>{info}</p>
                {/*buttons */}
                <div>
                    <Link to='/'>
                    <ButtonContainer>back to products</ButtonContainer>
                    <ButtonContainer cart
                    disabled={inCart?true:false}
                    onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);
                    }}
                    >
                        {inCart?'inCart':'add to cart'}
                    </ButtonContainer>
                    </Link>
                </div>
                </div>
                </div>
                {/* end of product info */}
                </div>
                 );
                }}
                </ProductConsumer>
                
        );
    }
}
export default Detail;