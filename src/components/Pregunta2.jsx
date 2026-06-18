import { useState } from 'react';
import BgNodes from './BgNodes';

const TAREAS = [
  { id: 'atencion',    label: 'Atención al cliente',    icon: '💬', horas: 22 },
  { id: 'redes',       label: 'Redes sociales',         icon: '📱', horas: 18 },
  { id: 'seguimiento', label: 'Seguimiento comercial',  icon: '📊', horas: 20 },
  { id: 'admin',       label: 'Administración',         icon: '📋', horas: 24 },
  { id: 'otro',        label: 'Otro',                   icon: '🔧', horas: 16 },
];

function StepDots({ current, total }) {
  return (
    <div className="nio-steps" style={{ justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`nio-step-dot ${i === current ? 'active' : i < current ? 'done' : ''}`} />
      ))}
    </div>
  );
}

export default function Pregunta2({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);
  const [otroText, setOtroText] = useState('');

  const canContinue = selected && (selected !== 'otro' || otroText.trim());

  function handleNext() {
    if (!canContinue) return;
    const tarea = TAREAS.find(t => t.id === selected);
    const label = selected === 'otro' ? otroText.trim() : tarea.label;
    const horas = tarea.horas;
    onNext({ tarea: label, horas });
  }

  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content">

        <StepDots current={1} total={5} />

        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
          Pregunta 2 de 2
        </p>

        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.3px' }}>
          ¿Qué tarea consume{' '}
          <span className="nio-gradient-text">más tiempo</span> en tu equipo?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px', marginBottom: '0' }}>
          Identifica el cuello de botella que más impacta tu productividad.
        </p>

        <div className="nio-options">
          {TAREAS.map(t => (
            <button
              key={t.id}
              className={`nio-option ${selected === t.id ? 'selected' : ''}`}
              onClick={() => setSelected(t.id)}
            >
              <span className="nio-option-icon">{t.icon}</span>
              <span style={{ flex: 1 }}>{t.label}</span>
              {selected === t.id && (
                <span style={{ color: '#8b5cf6', fontSize: '18px' }}>✓</span>
              )}
            </button>
          ))}

          {selected === 'otro' && (
            <input
              className="nio-input"
              placeholder="¿Cuál es esa tarea? (ej: Contabilidad, Reportes...)"
              value={otroText}
              onChange={e => setOtroText(e.target.value)}
              autoFocus
            />
          )}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button className="nio-btn-secondary" onClick={onBack}>← Volver</button>
          <button
            className="nio-btn-primary"
            onClick={handleNext}
            style={{ opacity: canContinue ? 1 : 0.4, cursor: canContinue ? 'pointer' : 'not-allowed' }}
          >
            Analizar →
          </button>
        </div>

      </div>
    </div>
  );
}
