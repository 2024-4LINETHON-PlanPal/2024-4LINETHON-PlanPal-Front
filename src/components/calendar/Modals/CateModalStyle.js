import React, { useState } from "react";
import axios from "axios"; 
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  background: rgba(0,0,0,0.5);
  height: 100%;
  top: 0;
  left: 0;
`;

export const ModalWrap = styled.div`
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  width: 336px;
  height: 437px;
  padding: 24px;
  position: relative;

  h5 {
    ${font.bold_20};
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 22px;
  right: 22px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  :hover{
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  .text {
    display: inline-flex;
    height: 32px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #d9d9d9;
    ${font.bold_15};
  }
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  .title {
    ${font.bold_15};
  }
`;

export const Name = styled.div`
::placeholder{
    ${font.bold_20};
    color: ${color.grayscale_bc};
}
  .textfield {
    background-color: #f6f6f6;
    border-radius: 4px;
    padding: 8px 0;
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    color: #17171b;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const Color = styled.div`
  .colorpalettes {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .color {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
  }
`;

export const Public = styled.div`
  .toggle {
    cursor: pointer;
    .public {
      margin-top: 10px;
      display: flex;
      width: 79px;
      height: 32px;
      padding: 16px 7px 16px 12px;
      justify-content: space-between;
      align-items: center;
      border-radius: 100px;
      background: #16857a;
      ${font.bold_15};
      color: #f6f6f6;
    }
    .private {
      margin-top: 10px;
      display: flex;
      width: 79px;
      height: 32px;
      padding: 16px 10px 16px 8px;
      justify-content: space-between;
      align-items: center;
      border-radius: 100px;
      background: #17171b;
      color: #f6f6f6;
      ${font.bold_15};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 50px;
  gap: 10px;
`;
export const Button = styled.div`
  display: flex;
  width: 94px;
  height: 40px;

  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  ${font.medium_18};
  border-radius: 15px;
  cursor: pointer;

  &.save{
    background: #17171b;
    color: #f6f6f6;
  }

  &.remove {
    border: 1px solid #17171b;
    background: #f6f6f6;
    color: #17171b;
  }
`;