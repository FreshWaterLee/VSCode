import React from 'react';
import Header from '../components/Header';

function ZooPage(){ // 동물 페이지 심플하게 종류 선택 후 관람 버튼으로 구성
    return (
    <>
        <Header/>
        <div className='main'>동물 페이지</div>
        <img src = '/images/Animal/001.jpg'/>
    </>
    ); 
}

export default ZooPage;