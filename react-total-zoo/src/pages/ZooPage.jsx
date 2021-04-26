import React from 'react';
import Header from '../components/Header';

function ZooPage(){
    return (
    <>
        <Header/>
        <div className='main'>동물 페이지</div>
        <img src = '/images/Animal/001.jpg'/>
    </>
    ); 
}

export default ZooPage;