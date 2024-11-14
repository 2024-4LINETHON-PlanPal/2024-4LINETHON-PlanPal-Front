import React, { useState } from "react";
import * as S from './ShareModalStyle.js';
import x from "assets/calendar/x.svg";
import serch from "assets/calendar/serch.svg";


const ShareModal = ({ onClose }) => {
  return (
    <S.Background>
      <S.ModalWrap>
        <S.Title>
          <div className="text">떠벌리기</div>
          <S.CloseButton src={x} alt="닫기" onClick={onClose} />
        </S.Title>
        <h5>
          계획 실행 동기부여를 위해
          <br />
          친구들에게 떠벌려보세요
        </h5>

        <S.Selection>
          <div className="title">떠벌릴 계획</div>
          <S.SelectPlan></S.SelectPlan>
          <div className="title">떠벌릴 친구 찾기</div>
          <S.People>
            <div className="wrap">
              <S.LongRoundBox></S.LongRoundBox>
              <img src={serch} alt="" />
            </div>
          </S.People>
          <S.PeopleWrap>
            <S.SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </S.SelectedPeople>
            <S.SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </S.SelectedPeople>
            <S.SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </S.SelectedPeople>
            <S.SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </S.SelectedPeople>
            <S.SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </S.SelectedPeople>
            <S.SelectedPeople>
              <div className="name">수진</div>
              <img src={x} alt="" />
            </S.SelectedPeople>
            
          </S.PeopleWrap>
          <div className="title">한마디</div>
          <S.LongTextfield></S.LongTextfield>
        </S.Selection>
        <S.ShareBtn onClick={onClose}>떠벌리기</S.ShareBtn>
      </S.ModalWrap>
    </S.Background>
  );
};

export default ShareModal;
