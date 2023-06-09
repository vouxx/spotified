// import { useEffect, useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import { MdHomeFilled } from 'react-icons/md';

import logo from '../../logo.svg';
// import getTokenApi from '../../js/api/getToken';

const Container = styled.div`
  width:400px;
  height:calc(100vh - 90px);
  background-color:#000;
  padding-top:24px;
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
`

const Logo = styled.a`
  display:block;
  width:130px;
  margin-left:24px;
  img{
    width:100%;
  }
`

const MenuGroup = styled.div`
  padding:0 24px;
`

const Menu = styled.ul`
  text-align:left;
  margin-top:24px;
`

const MenuBtn = styled.li`
  color:#b3b3b3;
  height:40px;
  font-size:14px;
  &.active{
    color:#fff;
  }
`
const Line = styled.hr`
  background-color:#282828;
  border:none;
  height:1px;
`

// const AlbumCover = styled.div`
//   width:100%;
//   img{width:100%;}
// `


export default function Header() {
  return (
    <Container>
      <div>
        <Logo>
          <img src={logo} alt="LOGO"/>
        </Logo>
        <MenuGroup>
          <Menu>
            <MenuBtn className={'active'}>
              <MdHomeFilled />
              <span> 홈 </span>
            </MenuBtn>
            <MenuBtn>검색</MenuBtn>
            <MenuBtn>내 라이브러리</MenuBtn>
          </Menu>
          <Menu>
            <MenuBtn>플레이리스트 만들기</MenuBtn>
            <MenuBtn>좋아요 표시한 곡</MenuBtn>
          </Menu>
          <Line />
          <Menu>
            <MenuBtn>내가 만든 플레이리스트ty</MenuBtn>
          </Menu>
        </MenuGroup>
      </div>
    </Container>
  );
}
