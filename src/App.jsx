import { Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";
import { getTheme } from "./theme/theme";
import Footer from "./components/Footer";
import NotFound from '../src/pages/NotFound'

const App = () => {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes> 
      <Footer/>
    </ThemeProvider>
  );
};

export default App;