import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function ZooPage({history}){ // 동물 페이지 심플하게 종류 선택 후 관람 버튼으로 구성
    return (
    <>
        <Header history= {history}/>
        <div className='main'>동물 페이지</div>
        <img src = "/images/Animal/001.jpg"/>
        <Footer />
    </>
    ); 
}

export default ZooPage;