import * as A from "components/modal/ModalBase.Style";
import CloseIconPng from "assets/common/close-icon-30x30.png";

export default function ModalBase({
  // 모달 닫는 함수
  setCloseModal,
  // 모달 내부 내용(컴포넌트)
  InsideComponent,
  // 모달 정보 - 모달 카테고리 및 한줄소개
  modalCategoryText,
  modalIntroduceText,
  modalIntroduceText2,
  // 버튼
  tripleBtnText1,
  tripleBtnText2,
  tripleBtnText3,
  doubleBtnText1,
  doubleBtnText2,
  longSingleBtnText1,
  longSingleBtnText2,
  bigSingleBtnText,
  // 모달 세로 길이(모달 위치 조절용)
  modalHeight,
  // 버튼 클릭 핸들러
  onLongSingleBtnClick,
  onLongSingleBtnClick2,
}) {
  // 높이 조절 필요
  return (
    <>
      <A.BackgroundBlack onClick={() => setCloseModal(false)}>ss</A.BackgroundBlack>
      <A.ModalContainer style={{ top: `calc(50% - (${modalHeight} / 2))` }}>
        <A.ModalTopbarContainer>
          <A.ImgContainer onClick={() => setCloseModal(false)}>
            <A.Img src={CloseIconPng} alt="close" />
          </A.ImgContainer>
          <A.ModalCategory>{modalCategoryText}</A.ModalCategory>
        </A.ModalTopbarContainer>
        {modalIntroduceText && (
          <A.ModalIntroduce>
            {modalIntroduceText}
            <br />
            {modalIntroduceText2}
          </A.ModalIntroduce>
        )}

        {InsideComponent && <InsideComponent />}

        {/* 버튼 사용시 유의사항: 1번(가로의 경우 오른쪽, 세로의 경우 위)부터 차례로 적기 */}

        {/* 가로 정렬 버튼 */}
        <A.ModalHorizontalButtonContainer>
          {/* 트리플 버튼 - 수정하기/저장하기, 삭제하기, 떠벌리기/공유하기 */}
          {tripleBtnText1 && <A.TripleButton1>{tripleBtnText1}</A.TripleButton1>}
          {tripleBtnText2 && <A.TripleButton2>{tripleBtnText2}</A.TripleButton2>}
          {tripleBtnText3 && <A.TripleButton3>{tripleBtnText3}</A.TripleButton3>}
        </A.ModalHorizontalButtonContainer>
        <A.ModalHorizontalButtonContainer>
          {/* 더블 버튼 - 약속 거절, 약속 수락 */}
          {doubleBtnText1 && <A.DoubleButton1>{doubleBtnText1}</A.DoubleButton1>}
          {doubleBtnText2 && <A.DoubleButton2>{doubleBtnText2}</A.DoubleButton2>}
        </A.ModalHorizontalButtonContainer>

        {/* 세로 정렬 버튼 */}
        <A.ModalVerticalButtonContainer>
          {/* 가로로 긴 싱글/더블 버튼 - 약속시간 확정하기 */}
          {longSingleBtnText1 && (
            <A.LongSingleButton1 onClick={onLongSingleBtnClick}>
              {longSingleBtnText1}
            </A.LongSingleButton1>
          )}
          {longSingleBtnText2 && (
            <A.LongSingleButton2 onClick={onLongSingleBtnClick2}>
              {longSingleBtnText2}
            </A.LongSingleButton2>
          )}
          {/* 세로가 긴 버튼 - 친구 추가하기 */}
          {bigSingleBtnText && <A.BigSingleButton>{bigSingleBtnText}</A.BigSingleButton>}
        </A.ModalVerticalButtonContainer>
      </A.ModalContainer>
    </>
  );
}
