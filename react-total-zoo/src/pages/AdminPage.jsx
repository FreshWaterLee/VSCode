import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function AdminPage({history}){
    return (
        <>
        <Header history= {history}/>
        <div className='main'>관리자 페이지</div>
        {
        console.log("ttt")
        }
        <Footer/>
        </>
    );
}

export default AdminPage;