import React from "react";
import styled from "styled-components";
export default function Slide({ img , event}) {
  return (
      <IMG src={img} className = "IMG" onMouseEnter = {event}/>
  );
}
const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;