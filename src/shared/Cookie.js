import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
  // return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=thu, 01 Jan 1999 00:00:10 GMT;";
};
