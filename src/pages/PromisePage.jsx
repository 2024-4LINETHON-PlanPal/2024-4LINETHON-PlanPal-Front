import React, { useState, useEffect } from "react";
import color from "styles/color";
import * as P from "components/promise/PromiseStyle";
import { POST, PUT, GET } from "apis/api";
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

export default function PromisePage({ username }) {
  const [currentModal, setCurrentModal] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [promiseId, setPromiseId] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  
  const closeModal = () => setCurrentModal(null);
  const openNextModal = (modalName) => setCurrentModal(modalName);

  const [promises, setPromises] = useState([]);
  const [promiseName, setPromiseName] = useState("");
  const [friendSearch, setFriendSearch] = useState("");
  const [members, setMembers] = useState([]);
  const [responseData, setResponseData] = useState([]);

  // 생성 시간 계산
  const calculateRemainingTime = () => {
    const elapsedTime = (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60);
    return Math.max(0, 24 - Math.floor(elapsedTime));
  };

  // 초기 로드 시 기존 약속 데이터를 로컬 저장소에서 불러오기
  useEffect(() => {
    const savedPromises = localStorage.getItem("promises");
    if (savedPromises) {
      setPromises(JSON.parse(savedPromises));
    }
  }, []);

  // 새로운 약속을 로컬 저장소에 추가
  const addPromiseToStorage = (newPromise) => {
    setPromises((prevPromises) => {
      const updatedPromises = [...prevPromises, newPromise];
      localStorage.setItem("promises", JSON.stringify(updatedPromises));
      return updatedPromises;
    });
  };

  // 약속 생성 함수
  const handleCreatePromise = async (promiseData) => {
    try {
      const response = await POST("promises/promise/option/", promiseData);
      if (response.data && response.data.result) {
        setResponseData(response.data.result);
        openNextModal("suggestModal");
      }
    } catch (error) {
      console.error("약속 생성에 실패했습니다.", error);
      alert("약속 생성에 실패했습니다.");
    }
  };

  // 모달 열 때 이전 입력 정보 초기화
  const openExploreModal = () => {
    setPromiseName("");
    setFriendSearch("");
    setMembers([]);
    openNextModal("exploreModal");
  };

  // 약속 확정 함수
  const handleConfirm = async () => {
    try {
      const promiseId = responseData.id;
      const selectedOption = responseData.promise_options[selectedIndex];
      if (selectedOption && promiseId) {
        const response = await PUT(`promises/promise/confirm/${promiseId}/${selectedOption.id}/`);
        
        if (response.data.message.includes("성공")) {
          const newPromise = {
            id: response.data.result.id,
            title: response.data.result.title || promiseName,
            start: response.data.result.start,
            end: response.data.result.end,
            length: response.data.result.length,
            status: "created",
            user: { id: username, nickname: "user" },
            members: response.data.result.members || members,
          };
          addPromiseToStorage(newPromise);
          closeModal();
          console.log(newPromise);
        }
      }
    } catch (error) {
      console.error("확정 과정에서 오류가 발생했습니다.", error);
    }
  };

  // 약속 투표 함수
  const handleVotePromise = async () => {
    try {
      const username = localStorage.getItem("username");
      const promiseId = responseData.id;
      const promiseOptionId = responseData.promise_options[selectedIndex].id;
  
      const response = await PUT(`promises/promise/vote/${username}/${promiseId}/${promiseOptionId}`)
      
      if (response.data.message.includes("성공")) {
        const newPromise = {
          id: response.data.result.id,
          title: response.data.result.title || promiseName,
          start: response.data.result.start,
          end: response.data.result.end,
          length: response.data.result.length,
          status: "voted",
          user: { id: username, nickname: "user" },
          members: response.data.result.members || members,
        };
        // 약속을 저장하고 모달을 열기
      if (addPromiseToStorage && typeof addPromiseToStorage === 'function') {
        addPromiseToStorage(newPromise);
      } else {
        console.error("addPromiseToStorage 함수가 정의되지 않았습니다.");
      }

      console.log("투표가 성공적으로 등록되었습니다.");

      if (openNextModal && typeof openNextModal === 'function') {
        openNextModal("voteCompleteModal");
      } else {
        console.error("openNextModal 함수가 정의되지 않았습니다.");
      }

    } else {
      console.error("투표 중 오류가 발생했습니다.", response);
    }
  } catch (error) {
    console.error("투표 요청 중 오류가 발생했습니다.", error);
  }
};

  return (
    <>
      <P.Wrapper>
        <PromiseHeader />
        <P.ItemWrapper>
          {
            promises.length > 0 ? (
            promises.map((promise) => (
              <PromiseItem
                key={promise.id}
                promiseId={promise.id}
                username={promise.username}
                promiseName={promise.title}
                members={promise.members}
                responseData={responseData}
                setResponseData={setResponseData}
                onClick={() => openNextModal("itemModal")}
              />
            ))
          ) : (
            <P.Black23text 
            style={{color: color.primary_black, paddingTop: "70%"}}>현재 약속이 없습니다</P.Black23text>
          )}
        </P.ItemWrapper>
        <PromiseBtn onClick={() => openNextModal("exploreModal")} />
      </P.Wrapper>

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
              promiseName={promiseName}
              setPromiseName={setPromiseName}
              friendSearch={friendSearch}
              setFriendSearch={setFriendSearch}
              members={members}
              setMembers={setMembers}
              onSubmit={handleCreatePromise}
            />
          )}
          modalCategoryText="약속시간 탐색"
          modalIntroduceText="약속시간을 탐색해보세요"
          modalHeight="500px"
        />
      )}

      {/* 약속시간 제안 모달 */}
      {currentModal === "suggestModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => (
            <SuggestModal 
              promiseName={promiseName} 
              members={members}
              responseData={responseData}
            />
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
          InsideComponent={() => 
          <>
            <SelectModal 
              promiseName={promiseName}
              members={members}
              responseData={responseData}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setSelectedOptionId={setSelectedOptionId}
              type="self" />
            <P.OnclickButton onClick={handleConfirm}>약속시간 확정하기</P.OnclickButton>
          </>}
          modalCategoryText="약속시간 제안"
          modalIntroduceText="약속시간을 제안해드릴게요"
          modalHeight="600px"
        />
      )}

      {/* 약속시간 투표 모달 */}
      {currentModal === "confirmByVoteModal" && (
        <ModalBase
          setCloseModal={closeModal}
          InsideComponent={() => 
            <>
            <SelectModal 
              promiseName={promiseName}
              members={members}
              responseData={responseData}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setSelectedOptionId={setSelectedOptionId}
              onSubmit={handleVotePromise}
              type="vote" />
              <P.OnclickButton onClick={handleVotePromise}>약속시간 투표하기</P.OnclickButton>
            </>}
          modalCategoryText="약속시간 투표"
          modalIntroduceText={`투표 종료까지 ${24-calculateRemainingTime()}시간 남았습니다`}
          modalHeight="600px"
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
          InsideComponent={() => 
          <StatusModal
            promiseName={promiseName}
            members={members}
            responseData={responseData}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setSelectedOptionId={setSelectedOptionId}
          />}
          modalCategoryText="약속시간 투표 현황 "
        />
      )}
    </>
  );
}
