import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pinturas from "./pages/Pinturas";
import Acuarelas from "./pages/Pinturas/components/Acuarelas";
import AcuarelasTemporada2022 from "./pages/Pinturas/components/Acuarelas/components/AcuarelasTemporada2022";

import './app.css'
import PinturasLayout from "./pages/Pinturas/components/PinturasLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pinturas" element={<Pinturas />}>
        <Route index element={<PinturasLayout/> }/>
        <Route path="acuarelas" element={<Acuarelas/> }>
          <Route path="verano-2021" element={<AcuarelasTemporada2022/>} />
          <Route index path="verano-2022" element={<AcuarelasTemporada2022/>} />
          <Route path="verano-2023" element={<AcuarelasTemporada2022/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
