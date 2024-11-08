import React, { useState } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";
import x from "assets/calendar/x.svg";
import under from "assets/calendar/underr.svg";
import serch from "assets/calendar/serch.svg";
import ShareModal from "./ShareModal";

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
  height: 687px;
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
  .day,
  .time {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Name = styled.div`
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

const DropdownContainer = styled.div`
  display: flex;
  height: 32px;
  padding: 17px 15px;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 288px;
  position: relative;
`;

const DropdownButton = styled.div`
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

const DropdownList = styled.div`
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

const ListItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const RoundBox = styled.div`
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
const Line = styled.div`
  width: 15px;
  height: 1px;
  background: #bcbcbc;
`;

const People = styled.div`
  .wrap {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
`;
const SaveBtn = styled.div`
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

const DelBtn = styled.div`
  display: flex;
  width: 94px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 15px;
  background: #fff;
  border: #17171B 1px solid;
  color: #17171B;
  ${font.medium_18};
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
  background: #FF6A3B;

  color: ${color.grayscale_f6};
  ${font.medium_18};
`;

const PlanModal = ({ onClose }) => {
  const [planName, setPlanName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("카테고리를 선택해주세요");
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  const handleShareClick = () => {
    setShowShareModal(true); 
  };

  const handleClose = () => {
    setShowShareModal(false); 
    onClose(); 
  };


  return (
    <>
    {showShareModal ? (
      <ShareModal onClose={handleClose} /> // ShareModal 표시
    ) : (
      <Background>
        <ModalWrap>
          <Title>
            <div className="text">계획수립</div>
            <CloseButton src={x} alt="닫기" onClick={onClose} />
          </Title>
          <h5>계획을 수립해보세요</h5>

          <Selection>
            <Name>
              <div className="title">이름</div>
              <input
                className="textfield"
                type="text"
                value={planName}
                placeholder="계획명을 입력해주세요"
                onChange={(e) => setPlanName(e.target.value)}
              />
            </Name>
            <div className="title">카테고리</div>
            <DropdownContainer>
              <DropdownButton onClick={toggleDropdown}>
                {selectedItem}
                <img src={under} alt="dropdown arrow" />
              </DropdownButton>
              {isOpen && (
                <DropdownList>
                  {items.map((item, index) => (
                    <ListItem key={index} onClick={() => handleItemClick(item)}>
                      {item}
                    </ListItem>
                  ))}
                </DropdownList>
              )}
            </DropdownContainer>
            <div className="title">기간</div>
            <div className="day">
              <RoundBox>dfd</RoundBox>
              <Line />
              <RoundBox>dfds</RoundBox>
            </div>
            <div className="time">
              <RoundBox>dfd</RoundBox>
              <Line />
              <RoundBox>dfdf</RoundBox>
            </div>

            <div className="title">참여자</div>
            <People>
              <div className="wrap">
                <LongRoundBox></LongRoundBox>
                <img src={serch} alt="" />
              </div>
            </People>

            <div className="title">메모</div>
            <LongTextfield></LongTextfield>
          </Selection>
          <ButtonContainer>
            <ShareBtn onClick={handleShareClick}>떠벌리기</ShareBtn> {/* 떠벌리기 버튼 클릭 시 handleShareClick 호출 */}
            <DelBtn onClick={onClose}>삭제하기</DelBtn>
            <SaveBtn onClick={onClose}>저장하기</SaveBtn>
          </ButtonContainer>
        </ModalWrap>
      </Background>
    )}
  </>
  );
};

export default PlanModal;
