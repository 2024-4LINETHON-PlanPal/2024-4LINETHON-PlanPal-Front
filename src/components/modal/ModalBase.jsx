export default function ModalBase({ setCloseModal, InsideComponent }) {
  return (
    <>
      <div onClick={() => setCloseModal(false)}>
        <p>ModalBase</p>
        {InsideComponent && <InsideComponent />}
        <p>ModalBase</p>
      </div>
    </>
  );
}
