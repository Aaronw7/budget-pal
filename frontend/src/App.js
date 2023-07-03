import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Networth from "./scenes/networth";
// import Cashflow from "./scenes/cashflow";
// import Budget from "./scenes/budget";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/cashflow" element={<Cashflow />} /> */}
              {/* <Route path="/budget" element={<Budget />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
