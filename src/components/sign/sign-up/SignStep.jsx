import * as A from "components/sign/sign-up/Signup.Style";

export default function SignStep({ categoryTitle, postposition, prevText }) {
  return (
    <>
      <A.CategoryChip>{categoryTitle} 설정</A.CategoryChip>
      <A.TitleText>
        {categoryTitle}
        {postposition}
        <br />
        입력해주세요
      </A.TitleText>
      <A.InputText placeholder={prevText} />
    </>
  );
}
