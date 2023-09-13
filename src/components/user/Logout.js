export const Logout = () => {
  const { logout } = useContext(UserContext);
  logout();
};
