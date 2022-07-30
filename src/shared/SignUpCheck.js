export const emailCheck = (email) => {
  let SignUpCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return SignUpCheck.test(email);
};

export const passwordCheck = (password) => {
  let SignUpCheck =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d`~!@#$%^&*()-_=+ "'{}]{6,15}$/;

  return SignUpCheck.test(password);
};
