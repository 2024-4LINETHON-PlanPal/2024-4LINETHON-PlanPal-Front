import React, { useState } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";
import x from "assets/calendar/x.svg";
import serch from "assets/calendar/serch.svg";

const Background = styled.div`
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

const ModalWrap = styled.div`
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  width: 336px;
  min-height: 576px;
  padding: 24px;
  position: relative;

  h5 {
    ${font.bold_20};
  }
`;

const CloseButton = styled.img`
  position: absolute;
  top: 22px;
  right: 22px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const Title = styled.div`
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

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  .title {
    ${font.bold_15};
  }
`;
const LongTextfield = styled.div`
  width: 288px;
  height: 70px;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  background: #f6f6f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  cursor: pointer;
`;
const LongRoundBox = styled.div`
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
const People = styled.div`
  .wrap {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
`;
const SelectPlan = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
`;
const PeopleWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;

`;
const SelectedPeople = styled.div`
  display: flex;
  height: 24px;
  padding: 0 10px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: rgba(217, 217, 217, 0.8);
  gap: 5px;
  .name {
    ${font.regular_12};
    display: flex;
    width: fit-content;
  }
  img {
    width: 9px;
    height: 9px;
    flex-shrink: 0;
  }
`;
const ShareBtn = styled.div`
 display: flex;
  width: 94px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 15px;
  background: #17171b;
  position: absolute;
  bottom: 32px;
  right: 22px;
  color: ${color.grayscale_f6};
  ${font.medium_18};
`;

const ShareModal = ({ onClose }) => {
  return (
    <Background>
      <ModalWrap>
        <Title>
          <div className="text">떠벌리기</div>
          <CloseButton src={x} alt="닫기" onClick={onClose} />
        </Title>
        <h5>
          계획 실행 동기부여를 위해
          <br />
          친구들에게 떠벌려보세요
        </h5>

        <Selection>
          <div className="title">떠벌릴 계획</div>
          <SelectPlan></SelectPlan>
          <div className="title">떠벌릴 친구 찾기</div>
          <People>
            <div className="wrap">
              <LongRoundBox></LongRoundBox>
              <img src={serch} alt="" />
            </div>
          </People>
          <PeopleWrap>
            <SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </SelectedPeople>
            <SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </SelectedPeople>
            <SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </SelectedPeople>
            <SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </SelectedPeople>
            <SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </SelectedPeople>
            <SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </SelectedPeople>
            
          </PeopleWrap>
          <div className="title">한마디</div>
          <LongTextfield></LongTextfield>
        </Selection>
        <ShareBtn onClick={onClose}>떠벌리기</ShareBtn>
      </ModalWrap>
    </Background>
  );
};

export default ShareModal;
