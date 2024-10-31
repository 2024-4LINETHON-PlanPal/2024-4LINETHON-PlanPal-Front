import styled from "styled-components";
import PromiseItem from "components/promise/PromiseItem";
import PromiseHeader from "components/promise/PromiseHeader"
import PromiseMaking from "components/promise/PromiseMaking"

const Wrapper = styled.div `
  padding: 25px;
`
const ItemWrapper = styled.div `
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap; 
  gap: 14px;
  justify-content: center;
`

export default function PromisePage() {
  return (
    <>
      <Wrapper>
        <PromiseHeader/> 
        <ItemWrapper>
          <PromiseItem/>
          <PromiseItem/>
          <PromiseItem/>
          <PromiseItem/>
          <PromiseItem/>
          <PromiseItem/>
          <PromiseItem/>
          <PromiseItem/>
        </ItemWrapper>
        <PromiseMaking/>
      </Wrapper>
      
    </>
    
  );
}
