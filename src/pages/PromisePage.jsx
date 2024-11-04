import React, { useState } from "react";
import styled from "styled-components";
import PromiseItem from "components/promise/PromiseItem";
import PromiseHeader from "components/promise/PromiseHeader";
import PromiseBtn from "components/promise/PromiseBtn";
import ModalBase from "components/modal/ModalBase";
import Promise1 from "components/promise/promiseModal/Promise1";
import Promise2 from "components/promise/promiseModal/Promise2";

const Wrapper = styled.div`
  padding: 25px;
`;

const ItemWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 110px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
`;

export default function PromisePage() {
  // 모달 열기 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);

  // 약속명과 참여자 상태
  const [title, setTitle] = useState("");
  const [friendSearch, setFriendSearch] = useState("");

  // 모달 1
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 모달 2
  const openSecondaryModal = () => setIsSecondaryModalOpen(true);
  const closeSecondaryModal = () => setIsSecondaryModalOpen(false);

  // 확정하기 버튼
  const handleConfirmButtonClick = () => {
    closeModal(); 
    openSecondaryModal();
  };

  return (
    <>
      <Wrapper>
        <PromiseHeader />
        <ItemWrapper>
          <PromiseItem />
          <PromiseItem />
          <PromiseItem />
          <PromiseItem />
          <PromiseItem />
          <PromiseItem />
          <PromiseItem />
          <PromiseItem />
        </ItemWrapper>
        <PromiseBtn onClick={openModal} />
      </Wrapper>

      {isModalOpen && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <Promise1
              title={title}
              setTitle={setTitle}
              friendSearch={friendSearch}
              setFriendSearch={setFriendSearch}
            />
          )}
          modalCategoryText="약속시간 탐색"
          modalIntroduceText="약속시간을 탐색해보세요"
          modalHeight="400px"
          longSingleBtnText1="약속 확정하기"
          onLongSingleBtnClick={handleConfirmButtonClick}
        />
      )}
      {isSecondaryModalOpen && (
        <ModalBase
          setCloseModal={closeSecondaryModal}
          InsideComponent={() => <Promise2 title={title} friendSearch={friendSearch} />}
          modalCategoryText="약속시간 제안"
          modalIntroduceText="약속시간을 제안해드릴게요"
          modalHeight="400px"
          longSingleBtnText1="내 마음대로 확정하기"
          longSingleBtnText2="참여자 투표로 확정하기"
        />
      )}
    </>
  );
}
