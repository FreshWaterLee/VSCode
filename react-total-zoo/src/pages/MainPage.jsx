import React from 'react'; 
import styled from 'styled-components';
import oc from 'open-color';
import {useHistory} from 'react-router'

const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

function MainPage(){
    const his = useHistory();
    return (
        <>
        <div style ={{margin: '100px'}}></div>
        <div className='main'>
        <Logo>메인페이지 구성</Logo>
        <h1>테스트트트</h1>
        </div>
        </>
    );
}
export default MainPage;