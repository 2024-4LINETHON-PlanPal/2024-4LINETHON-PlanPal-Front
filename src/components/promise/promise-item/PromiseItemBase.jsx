import React, { useState, useEffect } from "react";
import * as S from "components/promise/promise-item/PromiseItemStyle";
import { GET, POST, DELETE } from "apis/api";

export function PromiseItemBase({
  title,
  host,
  count,
  datetime,
  memo,
  iconSrc,
  openItemModal,
  openModifyModal,
  openShareModal,
  openStatusModal,
  showShareButton = false,
  showModifyButton = false,
  showStatusButton = false,
  status = null,
  username = localStorage.getItem("username"),
  promiseId
}) {
  const [isStarred, setIsStarred] = useState(false);

  console.log(promiseId);


  useEffect(() => {
    async function fetchStarStatus() {
      try {
        const response = await GET(`promises/promise/mark/${username}/${promiseId}/`);
        setIsStarred(response.data.isStarred);
      } catch (error) {
        console.error("Error fetching star status:", error);
      }
    }
    fetchStarStatus();
  }, [username, promiseId]);

  const handleStarClick = async (e) => {
    e.stopPropagation();
    try {
      if (isStarred) {
        await DELETE(`promises/promise/mark/${username}/${promiseId}/`);
      } 
      else {
        await POST(`promises/promise/mark/${username}/${promiseId}/`);
      }
      setIsStarred((prev) => !prev);
    } catch (error) {
      console.error("Error updating star status:", error);
    }
  };

  return (
    <S.ItemDiv onClick={openItemModal}>
      <S.StarIcon
        src={isStarred ? iconSrc.on : iconSrc.off}
        alt="star icon"
        onClick={handleStarClick}
      />
      <S.ItemInfo>
        <S.ItemTitle>{title}</S.ItemTitle>
        <div>
          <S.ItemStrongText>{host}</S.ItemStrongText>
          <S.ItemText> 외 {count}인</S.ItemText>
        </div>
        <S.ItemText>{datetime}</S.ItemText>
      </S.ItemInfo>
      
      <S.ItemMemo>
        {status === 'confirming' ? "약속 확정 중입니다" :
         status === 'voting' ? "투표중입니다" : memo}
      </S.ItemMemo>
      <S.ButtonContainer>
        {showShareButton && (
          <S.ItemBtn onClick={(e) => { e.stopPropagation(); openShareModal(); }}>
            공유
          </S.ItemBtn>
        )}
        {showModifyButton && (
          <S.ItemBtn onClick={(e) => { e.stopPropagation(); openModifyModal(); }}>
            수정
          </S.ItemBtn>
        )}
        {showStatusButton && (
          <S.ItemBtn onClick={(e) => { e.stopPropagation(); openStatusModal(); }}>
            수락 현황 보기
          </S.ItemBtn>
        )}
      </S.ButtonContainer>
    </S.ItemDiv>
  );
}
