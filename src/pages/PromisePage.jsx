import React, { useState } from "react";
import styled from "styled-components";
import { PromiseItem1, PromiseItem2, PromiseItem3, PromiseItem4, PromiseItem5, PromiseItem6 } from 
"components/promise/promise-item/PromiseItems";
import PromiseItem from "components/promise/promise-main/PromiseItem";
import PromiseHeader from "components/promise/promise-main/PromiseHeader";
import PromiseBtn from "components/promise/promise-main/PromiseBtn";
import ModalBase from "components/modal/ModalBase";
import ExploreModal from "components/promise/promise-modal/ExploreModal";
import SuggestModal from "components/promise/promise-modal/SuggestModal";
import SelectModal from "components/promise/promise-modal/SelectModal";
import CompleteModal from "components/promise/promise-modal/CompleteModal";
import StatusModal from "components/promise/promise-modal/StatusModal";
import ItemModal from "components/promise/promise-modal/ItemModal";
import ModifyModal from "components/promise/promise-modal/ModifyModal";
import ShareModal from "components/promise/promise-modal/ShareModal";

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

const items = [PromiseItem1, PromiseItem2, PromiseItem3, PromiseItem4, PromiseItem5, PromiseItem6];

export default function PromisePage() {
  const [currentModal, setCurrentModal] = useState(null);
  const closeModal = () => setCurrentModal(null);
  const openNextModal = (modalName) => setCurrentModal(modalName);

  const [title, setTitle] = useState("");
  const [friendSearch, setFriendSearch] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]);

  return (
    <>
      <Wrapper>
        <PromiseHeader />
        <ItemWrapper>
          {items.map((Component, index) => (
            <Component
              key={index}
              openItemModal={() => openNextModal("itemModal")}
              openShareModal={() => openNextModal("shareModal")}
              openModifyModal={() => openNextModal("modifyModal")}
              openStatusModal={() => openNextModal("voteStatusModal")}
            />
          ))}
        </ItemWrapper>
        <PromiseBtn onClick={() => openNextModal("exploreModal")} />
      </Wrapper>

      {/* 약속 세부정보 모달 */}
      {currentModal === "itemModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <ItemModal 
              openModifyModal={() => openNextModal("modifyModal")}
              onDeleteClick={closeModal} 
              openShareModal={() => openNextModal("shareModal")}
            />
          )}
          modalCategoryText="약속 정보"
          modalIntroduceText="약속 정보를 확인하세요."
          modalHeight="600px"
          tripleBtnText1="수정하기"
          tripleBtnText2="삭제하기"
          tripleBtnText3="공유하기"
          tripleBtnClickHandlers={[
            () => openNextModal("modifyModal"),  
            closeModal,                           
            () => openNextModal("shareModal"),    
          ]}
        />
      )}

      {/* 약속 수정 모달 */}
      {currentModal === "modifyModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={ModifyModal}
          modalCategoryText="약속 정보"
          modalIntroduceText="약속 정보를 수정하세요."
          modalHeight="600px"
          tripleBtnText1="저장하기"
        />
      )}

      {/* 약속 공유 모달 */}
      {currentModal === "shareModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={ShareModal}
          modalCategoryText="약속 공유"
          modalIntroduceText="여기톤 모여의 약속시간을"
          modalIntroduceText2="친구들과 공유해보세요"
          modalHeight="-420px"
      />
      )}

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
          onLongSingleBtnClick={() => openNextModal("voteStatusModal")}
        />
      )}

      {/* 투표 현황 모달 */}
      {currentModal === "voteStatusModal" && (
        <ModalBase
          modalHeight="600px"
          setCloseModal={closeModal}
          InsideComponent={() => <StatusModal/>}
          modalCategoryText="약속시간 투표 현황 "
        />
      )}
    </>
  );
}
