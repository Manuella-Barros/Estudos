import { ThemeProvider } from "styled-components";
import Perfil from "./pages/perfil/Perfil";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ligthTheme } from "./Global/globalStyle/themes/lightTheme";
import { GlobalStyle } from "./Global/globalStyle/GlobalStyle";
import { GlobalContextProvider } from "./context/GlobalContext";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";

function App() {
  return (
    <ThemeProvider theme={ligthTheme}>
      <BrowserRouter>
        <GlobalContextProvider>
          <GlobalStyle/>
      
          <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
