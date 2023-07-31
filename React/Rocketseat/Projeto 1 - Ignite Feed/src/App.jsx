import './global.css'
import Header from "./componentes/header/Header";
import Home from './pages/home/Home'
import { GlobalProvider } from './contexto/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Home />
    </GlobalProvider>
  );
}

export default App
