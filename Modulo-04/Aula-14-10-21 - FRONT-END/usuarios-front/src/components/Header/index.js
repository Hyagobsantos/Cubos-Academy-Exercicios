import "./style.css";
import useUser from "../../hooks/useUser";

function Header() {
  const { name } = useUser();
  return <header>Bem Vindo, {name}!</header>;
}

export default Header;
