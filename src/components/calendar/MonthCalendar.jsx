import React from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

import allow from "assets/calendar/arrow-right.svg";

const WrapDiv = styled.div`
    display: flex;
    padding: 5px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;

const TopBar = styled.div`
  display: flex;
  width: 342px;
  height: 44px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color:${color.primary_black};
  ${font.black_25};
`;

const TopRight = styled.div`
  display: flex;
  width: 84px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const Btn = styled.div`
  display: flex;
  width: 30px;
  height: 25px;
  padding: 1px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${color.primary_black};
  color: ${color.white};
  ${font.regular_10}
`;

const AllowRight = styled.img`
  width: 24px;
  height: 24px;
`;

const AllowLeft = styled.img`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
`;

const Cal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CalTitle = styled.div`
  display: flex;
  width: 352px;
  justify-content: space-between;
  align-items: center;
`;

const CalInnerText = styled.div`
  color: ${(props) => {
    if (props.isBlue) return "#4076BA";
    if (props.isRed) return "#C04277";
    return color.primary_black;
  }};
  text-align: center;
  ${font.regular_12};
  width: 52px;
  margin-right: 10px;
`;

const CalRow = styled.div`
  display: flex;
  width: 352px;
  justify-content: space-between;
  align-items: center;
`;

const CalItem = styled.div`
  color: ${(props) => {
    if (props.isGray) return color.grayscale_bc;
    return color.primary_black;
  }};
  display: flex;
  width: auto;
  height: 85px;
  flex-direction: column;
  width: 47px;
  padding: 0px 5px;
`;

const MonthCalendar = () => {
  return (
    <WrapDiv>
      <TopBar>
        <Title>2024 10</Title>
        <TopRight>
          <Btn>월</Btn>
          <AllowRight src={allow} />
          <AllowLeft src={allow} />
        </TopRight>
      </TopBar>
   
      <Cal>
        <CalTitle>
          <CalInnerText>MON</CalInnerText>
          <CalInnerText>TUE</CalInnerText>
          <CalInnerText>WED</CalInnerText>
          <CalInnerText>THU</CalInnerText>
          <CalInnerText>FRI</CalInnerText>
          <CalInnerText isBlue>SAT</CalInnerText>
          <CalInnerText isRed>SUN</CalInnerText>
        </CalTitle>
        <CalRow>
          <CalItem isGray>30</CalItem>
          <CalItem isGray>31</CalItem>
          <CalItem>1</CalItem>
          <CalItem>2</CalItem>
          <CalItem>3</CalItem>
          <CalItem>4</CalItem>
          <CalItem>5</CalItem>
        </CalRow>
        <CalRow>
          <CalItem>6</CalItem>
          <CalItem>7</CalItem>
          <CalItem>8</CalItem>
          <CalItem>9</CalItem>
          <CalItem>10</CalItem>
          <CalItem>11</CalItem>
          <CalItem>12</CalItem>
        </CalRow>
        <CalRow>
          <CalItem>13</CalItem>
          <CalItem>14</CalItem>
          <CalItem>15</CalItem>
          <CalItem>16</CalItem>
          <CalItem>17</CalItem>
          <CalItem>18</CalItem>
          <CalItem>19</CalItem>
        </CalRow>
        <CalRow>
          <CalItem>20</CalItem>
          <CalItem>21</CalItem>
          <CalItem>22</CalItem>
          <CalItem>23</CalItem>
          <CalItem>24</CalItem>
          <CalItem>25</CalItem>
          <CalItem>26</CalItem>
        </CalRow>
        <CalRow>
          <CalItem>27</CalItem>
          <CalItem>28</CalItem>
          <CalItem>29</CalItem>
          <CalItem>30</CalItem>
          <CalItem >31</CalItem>
          <CalItem isGray>1</CalItem >
          <CalItem isGray>2</CalItem>
        </CalRow>
      </Cal>
    </WrapDiv>
  );
}

export default MonthCalendar;
