import React, { useState } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";


export const OvalInput = styled.input`
  width: 200px;
    height: 32px;
    padding: 8px 18px;
    border-radius: 50px;
    outline: none;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
    border: 1px solid ${color.grayscale_bc};
    color: ${color.primary_black};
    background-color: transparent;
    ${font.regular_12};
    &[type="date"] {
      width: 200px;
      padding: 8px ;
    }
    &::placeholder {
        color: ${color.grayscale_bc}; 
    }
`;


export const DateAndTimeWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
`;

export const TimeLengthWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Background = styled.div`
  background: rgba(23, 23, 27, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ModalWrap = styled.div`
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  width: 336px;
  height: 687px;
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
  .day,
  .time {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Name = styled.div`
  ::placeholder {
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

export const DropdownContainer = styled.div`
  display: flex;
  height: 32px;
  padding: 17px 15px;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 288px;
  position: relative;
`;

export const DropdownButton = styled.div`
  width: 288px;
  padding: 10px;
  border-radius: 100px;
  background: #f6f6f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  border: 1px solid ${color.grayscale_bc};
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: space-between;
  background-color: #f6f6f6;
  ${font.regular_12};
  cursor: pointer;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 150px;
  overflow-y: auto;
  margin-top: 5px;
`;

export const ListItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const RoundBox = styled.div`
  display: flex;
  width: 120px;
  height: 32px;
  padding: 17px 13px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  background: #f6f6f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  cursor: pointer;
`;

export const LongSelect = styled.select`
display: flex;
width: 220px;
height: 32px;
padding: 17px 13px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 100px;
border: 1px solid #bcbcbc;
background: #f6f6f6;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
cursor: pointer;

`;

export const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;

  input[type="checkbox"] {
    transform: scale(1.2);
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label {
    font-weight: bold;
    color: #ff6a3b;
  }
`;


export const LongRoundBox = styled.input`
  display: flex;
  width: 240px;
  height: 32px;
  padding: 17px 13px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  background: #f6f6f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  cursor: pointer;
`;
export const Line = styled.div`
  width: 15px;
  height: 1px;
  background: #bcbcbc;
`;

export const People = styled.div`
  
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    .wrap{
      option{
        :hover{
          background-color: aliceblue;
        }
      }
    }
  
`;

export const LongTextfield = styled.input`
  width: 288px;
  height: 70px;
  border: 1px solid #bcbcbc;
  padding: 0 10px;
  border-radius: 10px;
  background: #f6f6f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
`;
export const SaveBtn = styled.div`
  display: flex;
  width: 94px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 15px;
  background: #17171b;

  color: ${color.grayscale_f6};
  ${font.medium_18};
`;

export const DelBtn = styled.div`
  display: flex;
  width: 94px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 15px;
  background: #fff;
  border: #17171b 1px solid;
  color: #17171b;
  ${font.medium_18};
`;
export const ShareBtn = styled.div`
  display: flex;
  width: 94px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 15px;
  background: #ff6a3b;

  color: ${color.grayscale_f6};
  ${font.medium_18};
`;

