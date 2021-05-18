import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {shadow, media} from '../libs/styleUtil';
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

export default function SimpleMenu({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);    
  };
  const handleClose = (e) => { //버튼 별 페이지 이동
    var id = e.target.id;
    if(id === 'main'){
        // match.push('/');
        document.location.href='/';
    }
    if(id === 'admin'){
        document.location.href='/test2';
    }
    if(id === 'zoo'){
        document.location.href='/gotoZoo';
    }
    setAnchorEl(null);
  };


  return (
    <div>
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>NaZoo Park</Logo>
                    <Spacer/>
                    {children}
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> */}
                        <Logo>Open Menu</Logo>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem ><Logo id = 'main' onClick={handleClose} >MainPage</Logo></MenuItem>
                        <MenuItem ><Logo id = 'admin' onClick={handleClose}>AdminPage</Logo></MenuItem>
                        <MenuItem ><Logo id = 'zoo' onClick={handleClose}>WatchPage</Logo></MenuItem>
                    </Menu>
                </HeaderContents>
                </WhiteBackground>
                <GradientBorder/>
                </Positioner>
    </div>
  );
}
