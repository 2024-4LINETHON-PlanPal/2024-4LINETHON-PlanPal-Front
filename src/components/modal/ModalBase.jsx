import * as A from "components/modal/ModalBase.Style";
import CloseIconPng from "assets/common/close-icon-30x30.png";

export default function ModalBase({ setCloseModal, InsideComponent }) {
  // 높이 조절 필요
  return (
    <>
      <A.BackgroundBlack onClick={() => setCloseModal(false)}>ss</A.BackgroundBlack>
      <A.ModalContainer>
        <A.ModalTopbarContainer>
          <A.ImgContainer onClick={() => setCloseModal(false)}>
            <A.Img src={CloseIconPng} alt="close" />
          </A.ImgContainer>
          <A.ModalCategory>내 정보</A.ModalCategory>
        </A.ModalTopbarContainer>
        <A.ModalIntroduce>내 정보를 확인해보세요</A.ModalIntroduce>

        {InsideComponent && <InsideComponent />}

        {/* 버튼 사용시 유의사항: 1번(가로의 경우 오른쪽, 세로의 경우 위)부터 차례로 적기 */}

        {/* 가로 정렬 버튼 */}
        <A.ModalHorizontalButtonContainer>
          {/* 트리플 버튼 - 수정하기/저장하기, 삭제하기, 떠벌리기/공유하기 */}
          <A.TripleButton1>수정하기</A.TripleButton1>
          <A.TripleButton2>삭제하기</A.TripleButton2>
          <A.TripleButton3>떠벌리기</A.TripleButton3>
        </A.ModalHorizontalButtonContainer>
        <A.ModalHorizontalButtonContainer>
          {/* 더블 버튼 - 약속 거절, 약속 수락 */}
          <A.DoubleButton1>약속 수락</A.DoubleButton1>
          <A.DoubleButton2>약속 거절</A.DoubleButton2>
        </A.ModalHorizontalButtonContainer>

        {/* 세로 정렬 버튼 */}
        <A.ModalVerticalButtonContainer>
          {/* 가로로 긴 싱글/더블 버튼 - 약속시간 확정하기 */}
          <A.LongSingleButton1>내 마음대로 확정하기</A.LongSingleButton1>
          <A.LongSingleButton2>참여자 투표로 확정하기</A.LongSingleButton2>
          {/* 세로가 긴 버튼 - 친구 추가하기 */}
          <A.BigSingleButton>친구 추가하기</A.BigSingleButton>
        </A.ModalVerticalButtonContainer>
      </A.ModalContainer>
    </>
  );
}
