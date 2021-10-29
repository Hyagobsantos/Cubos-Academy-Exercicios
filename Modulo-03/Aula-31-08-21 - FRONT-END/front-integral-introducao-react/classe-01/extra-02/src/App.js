import "./App.css";
import close from "./assets/close-icon.svg";

function App() {
  return (
    <div className="container">
      <div className="img">
        <img src={close} alt="Fechar" />
      </div>
      <h1>Share something awesome</h1>
      <p>
        New and awesome design content will be added to our website, and may
        even end up in our weekly newsletter.
      </p>
      <div className="input-buttom">
        <input type="text" placeholder="Eg. https://" />
        <button>Share</button>
      </div>

      <h4>Sharing guidelines</h4>
      <p className="footer">
        We accept quality design/visual projects, animations, 3D, UI/UX
        prototypes, or any other visual design project.
        <a href="####">Read more</a>
      </p>
    </div>
  );
}

export default App;
