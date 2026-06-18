import { useState } from 'react';
import BgNodes from './BgNodes';

const SECTORS = [
  { id: 'inmobiliaria', label: 'Inmobiliaria', icon: '🏢' },
  { id: 'salud',        label: 'Salud',        icon: '🏥' },
  { id: 'comercio',     label: 'Comercio',     icon: '🛒' },
  { id: 'servicios',    label: 'Servicios',    icon: '⚙️' },
  { id: 'otro',         label: 'Otro',         icon: '💼' },
];

// Indicador de pasos (puntos en la parte superior)
function StepDots({ current, total }) {
  return (
    <div className="nio-steps" style={{ justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`nio-step-dot ${i === current ? 'active' : i < current ? 'done' : ''}`}
        />
      ))}
    </div>
  );
}

export default function Pregunta1({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);
  const [otroText, setOtroText] = useState('');

  const canContinue = selected && (selected !== 'otro' || otroText.trim());

  function handleNext() {
    if (!canContinue) return;
    const sector = selected === 'otro' ? otroText.trim() : selected;
    onNext({ sector });
  }

  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content">

        <StepDots current={0} total={5} />

        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
          Pregunta 1 de 2
        </p>

        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.3px' }}>
          ¿En qué sector{' '}
          <span className="nio-gradient-text">opera tu empresa?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px', marginBottom: '0' }}>
          Esto nos permite calibrar las oportunidades de automatización relevantes para ti.
        </p>

        <div className="nio-options">
          {SECTORS.map(s => (
            <button
              key={s.id}
              className={`nio-option ${selected === s.id ? 'selected' : ''}`}
              onClick={() => setSelected(s.id)}
            >
              <span className="nio-option-icon">{s.icon}</span>
              {s.label}
              {selected === s.id && (
                <span style={{ marginLeft: 'auto', color: '#8b5cf6', fontSize: '18px' }}>✓</span>
              )}
            </button>
          ))}

          {/* Campo de texto libre si elige "Otro" */}
          {selected === 'otro' && (
            <input
              className="nio-input"
              placeholder="¿Cuál es tu sector? (ej: Educación, Logística...)"
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
            Continuar →
          </button>
        </div>

      </div>
    </div>
  );
}
