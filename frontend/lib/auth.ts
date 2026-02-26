export const getAuth = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isLoggedIn") === "true";
};

export const login = () => {
  localStorage.setItem("isLoggedIn", "true");
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
};