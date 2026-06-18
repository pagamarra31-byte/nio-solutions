import { useEffect, useState } from 'react';
import BgNodes from './BgNodes';

const PASOS = [
  'Analizando sector empresarial...',
  'Mapeando procesos repetitivos...',
  'Calculando potencial de automatización...',
  'Generando recomendaciones personalizadas...',
  'Preparando tu informe...',
];

export default function Analisis({ onDone }) {
  const [pasoActual, setPasoActual] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [pasosDone, setPasosDone] = useState([]);

  useEffect(() => {
    let pct = 0;
    // Subir porcentaje progresivamente
    const pctInterval = setInterval(() => {
      pct += 1;
      setPorcentaje(pct);
      if (pct >= 100) clearInterval(pctInterval);
    }, 30); // 3 segundos totales

    // Avanzar pasos cada ~600ms
    let paso = 0;
    const pasoInterval = setInterval(() => {
      setPasosDone(prev => [...prev, paso]);
      paso += 1;
      setPasoActual(paso);
      if (paso >= PASOS.length) {
        clearInterval(pasoInterval);
        // Cuando termina, llama a onDone (ir a resultados)
        setTimeout(() => onDone(), 600);
      }
    }, 600);

    return () => {
      clearInterval(pctInterval);
      clearInterval(pasoInterval);
    };
  }, [onDone]);

  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content" style={{ textAlign: 'center' }}>

        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px' }}>
          NIO Solutions — Analizando
        </p>

        {/* Anillo giratorio con porcentaje */}
        <div className="nio-analysis-ring">
          <div className="nio-analysis-ring-inner">
            <span className="nio-analysis-pct">{porcentaje}%</span>
          </div>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
          Procesando tu <span className="nio-gradient-text">diagnóstico</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '32px' }}>
          Nuestra IA está evaluando las oportunidades específicas de tu empresa
        </p>

        {/* Lista de pasos */}
        <div style={{ textAlign: 'left' }}>
          {PASOS.map((paso, i) => {
            const isDone = pasosDone.includes(i);
            const isActive = i === pasoActual;
            return (
              <div
                key={i}
                className={`nio-analysis-step ${isActive ? 'active' : isDone ? 'done' : ''}`}
              >
                {isDone || isActive ? (
                  <div className="nio-step-check">✓</div>
                ) : (
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    flexShrink: 0
                  }}/>
                )}
                {paso}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
