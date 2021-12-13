import "./App.css";
import Main from "./pages/Main";
import Header from "./components/Header";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
    </UserProvider>
  );
}

export default App;
