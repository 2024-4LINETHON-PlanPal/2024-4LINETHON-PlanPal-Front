import React, { useState, useEffect } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";
import sortIcon from "assets/promise/lets-icons_sort-arrow.svg";

const PromiseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 5px;
`;

const PromiseTitle = styled.p`
  color: ${color.primary_black};
  ${font.black_25};
`;

const SortButton = styled.button`
  display: flex;
  align-items: center; 
  padding: 8px 12px;
  width: auto;
  border: none;
  background-color: ${color.grayscale_eb};
  color: ${color.black};
  ${font.semibold_12};
  border-radius: 10px;
  cursor: pointer;
  gap: 5px; 
`;

const SortMenu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  width: 90px;
  background-color: ${color.grayscale_eb};
  border: 1px solid ${color.grayscale_bc};
  border-radius: 10px;
  overflow: hidden;
  z-index: 10;
`;

const SortMenuItem = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background-color: ${color.grayscale_eb};
  ${font.semibold_12};
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  width: auto;
  height: auto;
`;

export default function PromiseHeader() {
  const [nickname, setNickname] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    async function fetchNickname() {
      const response = await fetch("/api/user/nickname");
      const data = await response.json();
      setNickname(data.nickname);
    }
    fetchNickname();
  }, []);

  const toggleSortMenu = () => setSortOpen(!sortOpen);

  const handleSortChange = (type) => {
    setSortType(type);
    setSortOpen(false);
  };

  return (
      <PromiseWrapper>
        <PromiseTitle>{nickname}의 약속</PromiseTitle>
        <SortButton onClick={toggleSortMenu}>
          <Img src={sortIcon} />
          {sortType ? sortType : "정렬 기준"}
        </SortButton>
        <SortMenu open={sortOpen}>
          <SortMenuItem onClick={() => handleSortChange("즐겨찾기순")}>즐겨찾기순</SortMenuItem>
          <SortMenuItem onClick={() => handleSortChange("약속등록순")}>약속등록순</SortMenuItem>
          <SortMenuItem onClick={() => handleSortChange("약속임박순")}>약속임박순</SortMenuItem>
        </SortMenu>
      </PromiseWrapper>
  );
}
