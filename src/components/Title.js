import React from 'react';

export default function Title({name,title}){
    return(
        <div className='row'>
            <div className='cl-10 mx-auto my-2 text-center text-title'>
            <h1 className='text-title text-weight-bold'>
            <strong className='text-bright'>{name} {title}</strong>
            </h1>
            </div>
        </div>
    );
}