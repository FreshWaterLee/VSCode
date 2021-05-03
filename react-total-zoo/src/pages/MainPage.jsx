import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useHistory} from 'react-router'

function MainPage({location, history}){
    const his = useHistory();
    return (
        <>
        <Header location = {location} history = {history}/>
        {/* <div className='main'>메인페이지 구성</div> */}
        <Footer/>
        </>
    );
}
export default MainPage;