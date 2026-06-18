import { useState } from 'react';
import Hero from './components/Hero';
import Pregunta1 from './components/Pregunta1';
import Pregunta2 from './components/Pregunta2';
import Analisis from './components/Analisis';
import Resultado from './components/Resultado';
import FormularioLead from './components/FormularioLead';
import Gracias from './components/Gracias';

// Pantallas posibles
const PANTALLAS = ['hero', 'p1', 'p2', 'analisis', 'resultado', 'lead', 'gracias'];

export default function App() {
  // 'pantalla' indica cuál pantalla se muestra ahora
  const [pantalla, setPantalla] = useState('hero');

  // 'datos' guarda todo lo que el usuario va respondiendo
  const [datos, setDatos] = useState({});

  // Función para avanzar a la siguiente pantalla
  function avanzar(nuevos = {}) {
    setDatos(prev => ({ ...prev, ...nuevos }));
    const idx = PANTALLAS.indexOf(pantalla);
    setPantalla(PANTALLAS[idx + 1]);
  }

  // Función para retroceder
  function retroceder() {
    const idx = PANTALLAS.indexOf(pantalla);
    if (idx > 0) setPantalla(PANTALLAS[idx - 1]);
  }

  return (
    <>
      {pantalla === 'hero'     && <Hero onStart={() => avanzar()} />}
      {pantalla === 'p1'       && <Pregunta1 onNext={avanzar} onBack={retroceder} />}
      {pantalla === 'p2'       && <Pregunta2 onNext={avanzar} onBack={retroceder} />}
      {pantalla === 'analisis' && <Analisis  onDone={() => avanzar()} />}
      {pantalla === 'resultado'&& <Resultado datos={datos} onNext={() => avanzar()} />}
      {pantalla === 'lead'     && <FormularioLead datos={datos} onNext={avanzar} />}
      {pantalla === 'gracias'  && <Gracias datos={datos} />}
    </>
  );
}
