import React, { useState } from "react";
import styled from "styled-components";
import PromiseItem from "components/promise/promise-main/PromiseItem";
import PromiseHeader from "components/promise/promise-main/PromiseHeader";
import PromiseBtn from "components/promise/promise-main/PromiseBtn";
import ModalBase from "components/modal/ModalBase";
import ExploreModal from "components/promise/promise-modal/ExploreModal";
import SuggestModal from "components/promise/promise-modal/SuggestModal";
import SelectModal from "components/promise/promise-modal/SelectModal";
import CompleteModal from "components/promise/promise-modal/CompleteModal";
import ResultModal from "components/promise/promise-modal/ResultModal";



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
  // 모달 상태를 관리하는 상태값
  const [currentModal, setCurrentModal] = useState(null);

  // 현재 모달 닫고 다음 모달 열기
  const openNextModal = (modalName) => setCurrentModal(modalName);
  const closeModal = () => setCurrentModal(null);

  // 약속명과 참여자 상태
  const [title, setTitle] = useState("");
  const [friendSearch, setFriendSearch] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]);

  return (
    <>
      <Wrapper>
        <PromiseHeader />
        <ItemWrapper>
          {[...Array(8)].map((_, index) => (
            <PromiseItem key={index} />
          ))}
        </ItemWrapper>
        <PromiseBtn onClick={() => openNextModal("exploreModal")} />
      </Wrapper>

      {/* 약속시간 탐색 모달 */}
      {currentModal === "exploreModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <ExploreModal
              title={title}
              setTitle={setTitle}
              friendSearch={friendSearch}
              setFriendSearch={setFriendSearch}
              selectedFriends={selectedFriends}
              setSelectedFriends={setSelectedFriends}
            />
          )}
          modalCategoryText="약속시간 탐색"
          modalIntroduceText="약속시간을 탐색해보세요"
          modalHeight="500px"
          longSingleBtnText1="약속 확정하기"
          onLongSingleBtnClick={() => openNextModal("suggestModal")}
        />
      )}

      {/* 약속시간 제안 모달 */}
      {currentModal === "suggestModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <SuggestModal title={title} selectedFriends={selectedFriends} />
          )}
          modalCategoryText="약속시간 제안"
          modalIntroduceText="약속시간을 제안해드릴게요"
          modalHeight="600px"
          longSingleBtnText1="내 마음대로 확정하기"
          longSingleBtnText2="참여자 투표로 확정하기"
          onLongSingleBtnClick={() => openNextModal("confirmBySelfModal")}
          onLongSingleBtnClick2={() => openNextModal("confirmByVoteModal")}
        />
      )}

      {/* 내 마음대로 확정 모달 */}
      {currentModal === "confirmBySelfModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => <SelectModal type="self" />}
          modalCategoryText="약속시간 제안"
          modalIntroduceText="약속시간을 제안해드릴게요"
          modalHeight="600px"
          longSingleBtnText1="약속시간 확정하기"
          onLongSingleBtnClick={closeModal}
        />
      )}

      {/* 약속시간 투표 모달 */}
      {currentModal === "confirmByVoteModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => <SelectModal type="vote" />}
          modalCategoryText="약속시간 투표"
          modalIntroduceText="투표 종료까지 12:30 남았습니다"
          modalHeight="600px"
          longSingleBtnText1="약속시간 투표하기"
          onLongSingleBtnClick={() => openNextModal("voteCompleteModal")}
        />
      )}

      {/* 투표 완료 모달 */}
      {currentModal === "voteCompleteModal" && (
        <ModalBase
          modalHeight="600px"
          setCloseModal={closeModal}
          InsideComponent={() => <CompleteModal/>}
          modalCategoryText="약속시간 투표"
          longSingleBtnText1="투표 현황 확인하기"
          onLongSingleBtnClick={() => openNextModal("voteResultModal")}
        />
      )}

      {/* 투표 현황 모달 */}
      {currentModal === "voteResultModal" && (
        <ModalBase
          modalHeight="600px"
          setCloseModal={closeModal}
          InsideComponent={() => <ResultModal/>}
          modalCategoryText="약속시간 투표 현황 "
        />
      )}
    </>
  );
}
