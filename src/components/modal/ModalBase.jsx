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
        <A.ModalTripleButtonContainer>
          <A.ModalButton1>aaa</A.ModalButton1>
          <A.ModalButton1>bbb</A.ModalButton1>
          <A.ModalButton1>ccc</A.ModalButton1>
        </A.ModalTripleButtonContainer>
      </A.ModalContainer>
    </>
  );
}
