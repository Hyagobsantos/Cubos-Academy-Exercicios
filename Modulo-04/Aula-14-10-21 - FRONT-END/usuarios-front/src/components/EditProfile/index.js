import "./style.css";
import useUser from "../../hooks/useUser";
import {useState} from 'react'

function EditProfile() {
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState("");

  const { setName, setIdade } = useUser();

  function handleSubmit(e) {
    e.preventDefault();

    if (!localName) {
      return;
    }

    setName(localName);
    setIdade(localAge);

    setLocalName("");
    setLocalAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          placeholder="Nome"
          onChange={(e) => setLocalName(e.target.value)}
          value={localName}
        ></input>
      </label>
      <label>
        Idade:
        <input
          placeholder="Idade"
          onChange={(e) => setLocalAge(e.target.value)}
          value={localAge}
        ></input>
      </label>
      <button>Editar</button>
    </form>
  );
}

export default EditProfile;
