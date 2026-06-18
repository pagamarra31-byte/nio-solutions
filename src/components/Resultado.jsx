import { useEffect, useState } from 'react';
import BgNodes from './BgNodes';

// Scores por sector (en porcentaje)
const SCORES = {
  inmobiliaria: 88,
  salud: 82,
  comercio: 91,
  servicios: 86,
  otro: 79,
  default: 79,
};

// Oportunidades de automatización según sector
const OPORTUNIDADES = {
  inmobiliaria: [
    'Respuesta automática a consultas de propiedades',
    'Seguimiento de leads por WhatsApp',
    'Generación de contratos y documentos',
    'Reportes de cartera automatizados',
  ],
  salud: [
    'Agendamiento de citas sin llamadas',
    'Recordatorios automáticos a pacientes',
    'Gestión de historial médico digital',
    'Facturación y seguros automatizados',
  ],
  comercio: [
    'Gestión automática de inventario',
    'Atención al cliente 24/7 por IA',
    'Notificaciones de pedidos en tiempo real',
    'Análisis de ventas y tendencias',
  ],
  servicios: [
    'Propuestas comerciales automatizadas',
    'Seguimiento post-venta inteligente',
    'Agendamiento de reuniones sin fricción',
    'Reportes de KPIs en tiempo real',
  ],
};

// Anillo SVG de score circular
function ScoreRing({ score }) {
  const [current, setCurrent] = useState(0);
  const radius = 56;
  const circunferencia = 2 * Math.PI * radius;

  useEffect(() => {
    let n = 0;
    const timer = setInterval(() => {
      n += 1;
      setCurrent(n);
      if (n >= score) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [score]);

  const progreso = (current / 100) * circunferencia;

  return (
    <div className="nio-score-ring">
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* Track gris */}
        <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
        {/* Arco de progreso */}
        <circle
          cx="70" cy="70" r={radius}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circunferencia}
          strokeDashoffset={circunferencia - progreso}
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1"/>
            <stop offset="100%" stopColor="#8b5cf6"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="nio-score-number">
        <span className="nio-gradient-text">{current}%</span>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '400', marginTop: '-4px' }}>potencial</span>
      </div>
    </div>
  );
}

export default function Resultado({ datos, onNext }) {
  const sectorKey = datos.sector?.toLowerCase();
  const score = SCORES[sectorKey] || SCORES.default;
  const checks = OPORTUNIDADES[sectorKey] || OPORTUNIDADES.servicios;

  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content">

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
            Tu diagnóstico está listo
          </p>

          <ScoreRing score={score} />

          <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.3px' }}>
            Tu empresa tiene{' '}
            <span className="nio-gradient-text">alto potencial</span>{' '}
            de automatización
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
            Sector: <strong style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'capitalize' }}>{datos.sector}</strong>
            {' · '}
            Tarea principal: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{datos.tarea}</strong>
          </p>
        </div>

        {/* Ahorro estimado */}
        <div className="nio-card" style={{ padding: '20px 24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '36px' }}>⏱️</div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: '800' }} className="nio-gradient-text">
              {datos.horas}h / semana
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
              de trabajo repetitivo que podría automatizarse
            </div>
          </div>
        </div>

        {/* Oportunidades detectadas */}
        <div className="nio-card" style={{ padding: '20px 24px', marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px', fontWeight: '600' }}>
            Oportunidades detectadas
          </p>
          <div className="nio-checks">
            {checks.map((c, i) => (
              <div key={i} className="nio-check-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="nio-check-dot">✓</div>
                {c}
              </div>
            ))}
          </div>
        </div>

        <button
          className="nio-btn-primary"
          onClick={onNext}
          style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px' }}
        >
          Quiero implementar esto en mi empresa →
        </button>

        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          Sin costo · Sin compromiso
        </p>

      </div>
    </div>
  );
}
