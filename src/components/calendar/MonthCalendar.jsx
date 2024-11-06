import React from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

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
  text-align: center;
  ${font.regular_12};
  width: 52px;
  margin-right: 10px;
  color: ${color.primary_black};

  &.blue-day {
    color: #4076ba;
  }

  &.red-day {
    color: #c04277;
  }
`;

const CalRow = styled.div`
  display: flex;
  width: 352px;
  justify-content: space-between;
  align-items: center;
`;

const CalItem = styled.div`
  display: flex;
  flex: 1;
  height: 85px;
  flex-direction: column;
  padding: 0px 5px;
  color: ${color.primary_black};

  &.gray-day {
    color: ${color.grayscale_bc};
  }

  &.blue-day {
    color: #4076ba;
  }

  &.red-day {
    color: #c04277;
  }
  .plan {
    width: calc(100% + 10px);
    height: 20px;
    margin-left: -5px;
    background-color: #4077ba71;
    border-left: 2px solid #4076ba;
  }
`;

const MonthCalendar = () => {
  return (
    <Cal>
      <CalTitle>
        <CalInnerText>MON</CalInnerText>
        <CalInnerText>TUE</CalInnerText>
        <CalInnerText>WED</CalInnerText>
        <CalInnerText>THU</CalInnerText>
        <CalInnerText>FRI</CalInnerText>
        <CalInnerText className="blue-day">SAT</CalInnerText>
        <CalInnerText className="red-day">SUN</CalInnerText>
      </CalTitle>
      <CalRow>
        <CalItem className="gray-day">30</CalItem>
        <CalItem className="gray-day">31</CalItem>
        <CalItem>1</CalItem>
        <CalItem>2</CalItem>
        <CalItem>3</CalItem>
        <CalItem className="blue-day">4</CalItem>
        <CalItem className="red-day">5</CalItem>
      </CalRow>
      <CalRow>
        <CalItem>6</CalItem>
        <CalItem>7</CalItem>
        <CalItem>8</CalItem>
        <CalItem>9</CalItem>
        <CalItem>10</CalItem>
        <CalItem className="blue-day">11</CalItem>
        <CalItem className="red-day">12</CalItem>
      </CalRow>
      <CalRow>
        <CalItem>
          13
          <div className="plan">dj</div>
          <div className="plan">f</div>
          <div className="plan">ddj</div>
        </CalItem>
        <CalItem>
          14
          <div className="plan">ddj</div>
        </CalItem>
        <CalItem>15</CalItem>
        <CalItem>16</CalItem>
        <CalItem>17</CalItem>
        <CalItem className="blue-day">18</CalItem>
        <CalItem className="red-day">19</CalItem>
      </CalRow>
      <CalRow>
        <CalItem>20</CalItem>
        <CalItem>21</CalItem>
        <CalItem>22</CalItem>
        <CalItem>23</CalItem>
        <CalItem>24</CalItem>
        <CalItem className="blue-day">25</CalItem>
        <CalItem className="red-day">26</CalItem>
      </CalRow>
      <CalRow>
        <CalItem>27</CalItem>
        <CalItem>28</CalItem>
        <CalItem>29</CalItem>
        <CalItem>30</CalItem>
        <CalItem>31</CalItem>
        <CalItem className="gray-day blue-day">1</CalItem>
        <CalItem className="gray-day red-day">2</CalItem>
      </CalRow>
    </Cal>
  );
};

export default MonthCalendar;
