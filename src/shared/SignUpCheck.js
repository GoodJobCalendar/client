export const emailCheck = (email) => {
  let SignUpCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return SignUpCheck.test(email);
};

export const nicknameCheck = (nickname) => {
  let SignUpCheck = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  return SignUpCheck.test(nickname);
};
