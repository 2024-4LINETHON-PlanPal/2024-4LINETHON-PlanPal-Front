import React, { useState } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";
import x from "assets/calendar/x.svg";
import round from "assets/calendar/round.svg";

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
  height: 437px;
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

const Name = styled.div`
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

const Color = styled.div`
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

const Public = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 50px;
  gap: 10px;
`;
const Button = styled.div`
  display: flex;
  width: 94px;
  height: 40px;

  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  ${font.medium_18};
  border-radius: 15px;
  cursor: pointer;

  &.edit , &.save{
    background: #17171b;
    color: #f6f6f6;
  }

  &.remove {
    border: 1px solid #17171b;
    background: #f6f6f6;
    color: #17171b;
  }
`;

const CateModal = ({ onClose }) => {
  const [isPublic, setIsPublic] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const togglePublic = () => {
    setIsPublic((prev) => !prev);
  };

  const colors = ["#FF6A3B", "#4076BA", "#C04277", "#16857A", "#A97C50"];

  return (
    <Background>
      <ModalWrap>
        <Title>
          <div className="text">카테고리 정보</div>
          <CloseButton src={x} alt="닫기" onClick={onClose} />
        </Title>
        <h5>카테고리 정보를 확인해보세요</h5>

        <Selection>
          <Name>
            <div className="title">이름</div>
            <input
              className="textfield"
              placeholder="STUDY"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Name>
          <Color>
            <div className="title">색상</div>
            <div className="colorpalettes">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color"
                  style={{
                    backgroundColor: color,
                    border:
                      selectedColor === color
                        ? "1px solid black"
                        : "1px solid transparent",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </Color>
          <Public>
            <div className="title">공개</div>
            <div className={`toggle`} onClick={togglePublic}>
              {isPublic ? (
                <div className="public">
                  <p>공개</p>
                  <img src={round} alt="" />
                </div>
              ) : (
                <div className="private">
                  <img src={round} alt="" />
                  <p>비공개</p>
                </div>
              )}
            </div>
          </Public>
        </Selection>
        <ButtonContainer>
          <Button className="remove">삭제하기</Button>
          <Button className="edit">수정하기</Button>
          <Button className="save">저장하기</Button>
        </ButtonContainer>
      </ModalWrap>
    </Background>
  );
};

export default CateModal;
