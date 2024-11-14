import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const TimeWrap = styled.div`
  width: 15px;
  margin-top: 7.5px;
`;

export const Time = styled.div`
  height: 20.3px;
  display: flex;
  justify-content: center;
`;

export const MakerWrap = styled.div`
  margin-top: 14.5px;
  width: 140px;
`;

export const Hours = styled.div`
  height: 20.3px;
  display: flex;
  border-top: 1px solid #bcbcbc;
`;

export const HalfHours = styled.div`
  flex: 1;
  width: 70px;

  &.has-content {
    background-color: #DFA0BB;
  }
`;

export const CheckWrap = styled.div`
  width: 169px;
`;

export const CheckBox = styled.div`
  flex: 1;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const CheckTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .title {
    background-color: ${color.grayscale_d9};
    padding: 0 10px;
    height: 24px;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    ${font.bold_15};
    font-size: 13px;
  }
  .btn {
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 100px;
    border: 0.5px solid ${color.grayscale_bc};
    background: #f6f6f6;
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const TodoItem = styled.div`
  margin-left: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  .wrap {
    display: flex;
    align-items: center;
    .box {
      display: flex;
      width: 20px;
      height: 20px;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 5px;
      border-radius: 5px;
      background: #d9d9d9;
      img{
        display: flex;
        z-index: 10;
        width: 20px;
      }
    }
    .todo {
      width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      ${font.regular_15};
      font-size: 14px;
    }
  }
  .img {
    width: 15.5px;
    right: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    :hover{
      cursor: pointer;
    }
    img {
      width: 15.5px;
      height: 3.5px;
    }
  }
`;

export const Category = styled.div`
  justify-self: end;
  margin: 10px 0;
  display: flex;
  width: 85px;
  height: 26px;
  padding: 1px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  cursor: pointer;
  :hover{
    cursor: pointer;
  }
  img {
    width: 16px;
  }
  p {
    color: #bcbcbc;
    text-align: center;
    ${font.regular_10};
  }
`;
