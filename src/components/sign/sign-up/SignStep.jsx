import * as A from "components/sign/sign-up/Signup.Style";

export default function SignStep({
  categoryTitle,
  postposition,
  prevText,
  register,
  errors,
  registerName,
  errorText,
  setId,
}) {
  // console.log("setId 함수: ", setId);

  return (
    <>
      <A.CategoryChip>{categoryTitle} 설정</A.CategoryChip>
      <A.TitleText>
        {categoryTitle}
        {postposition}
        <br />
        입력해주세요
      </A.TitleText>
      <A.InputBox
        type="text"
        placeholder={prevText}
        {...register(registerName, {
          required: true,
          onChange: (e) => setId && setId(e.target.value),
        })}
      />
      {errors[registerName]?.message && <A.ErrorText>{errors[registerName]?.message}</A.ErrorText>}
      {errorText && <A.ErrorText>{errorText}</A.ErrorText>}
    </>
  );
}
