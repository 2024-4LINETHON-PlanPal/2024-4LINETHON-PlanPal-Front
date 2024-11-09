import * as A from "components/sign/sign-up/Signup.Style";

export default function SignStep({
  categoryTitle,
  postposition,
  prevText,
  register,
  errors,
  registerName,
}) {
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
          // onChange: (e) => {
          //   console.log(`현재 ${registerName}의 값: ${e.target.value}`); //
          // },
        })}
      />
      <p style={{ color: "red" }}>{errors[registerName]?.message}</p>
    </>
  );
}
