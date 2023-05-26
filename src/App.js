import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pinturas from "./pages/Pinturas";
import Acuarelas from "./pages/Pinturas/components/Acuarelas";
import AcuarelasTemporada2021 from "./pages/Pinturas/components/Acuarelas/components/AcuarelasTemporada2021";
import AcuarelasTemporada2022 from "./pages/Pinturas/components/Acuarelas/components/AcuarelasTemporada2022";
import AcuarelasTemporada2023 from "./pages/Pinturas/components/Acuarelas/components/AcuarelasTemporada2023";

import './app.css'
import PinturasLayout from "./pages/Pinturas/components/PinturasLayout";
import Oleos from "./pages/Pinturas/components/Oleos";
import Detalle from "./pages/Pinturas/components/Oleos/Detalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pinturas" element={<Pinturas />}>
        <Route index element={<PinturasLayout/> }/>
        <Route path="oleos-acrilicos" element={<Oleos/>}>
          <Route path=":pinturaId" element={<Detalle/>}/>
        </Route>
        <Route path="acuarelas" element={<Acuarelas/> }>
          <Route index path="verano-2021" element={<AcuarelasTemporada2021/>} />
          <Route path="verano-2022" element={<AcuarelasTemporada2022/>} />
          <Route path="verano-2023" element={<AcuarelasTemporada2023/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
