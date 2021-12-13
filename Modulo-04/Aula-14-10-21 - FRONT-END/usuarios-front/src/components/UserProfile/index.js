import "./style.css";
import useUser from "../../hooks/useUser";

function UserProfile() {
  const { name, idade } = useUser();

  return (
    <div className="container-profile">
      <div>
        <strong>Nome:</strong>
        <span>{name}</span>
      </div>

      <div>
        <strong>Idade:</strong>
        <span>{idade}</span>
      </div>
    </div>
  );
}

export default UserProfile;
