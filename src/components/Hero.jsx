import BgNodes from './BgNodes';

export default function Hero({ onStart }) {
  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content" style={{ textAlign: 'center' }}>

        {/* Logo NIO */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            fontSize: '72px',
            fontWeight: '800',
            letterSpacing: '-4px',
            lineHeight: 1,
          }} className="nio-silver-text">NIO</span>
        </div>

        <p style={{
          fontSize: '13px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: '48px',
          fontWeight: '500'
        }}>
          Solutions
        </p>

        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '16px',
          letterSpacing: '-0.5px'
        }}>
          Descubre cuánto puede{' '}
          <span className="nio-gradient-text">automatizar tu empresa</span>
        </h1>

        <p style={{
          fontSize: '17px',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: '1.6',
          marginBottom: '8px',
          maxWidth: '480px',
          margin: '0 auto 32px'
        }}>
          Análisis personalizado con IA en menos de 2 minutos.
          Sin tecnicismos, sin compromiso.
        </p>

        {/* Stats */}
        <div className="nio-stats">
          <div className="nio-stat">
            <strong>80%</strong> de procesos automatizables
          </div>
          <div className="nio-stat">
            <strong>20h</strong> ahorradas por semana
          </div>
          <div className="nio-stat">
            <strong>24/7</strong> operación continua
          </div>
        </div>

        <button className="nio-btn-primary" onClick={onStart} style={{ marginTop: '40px', fontSize: '17px', padding: '16px 40px' }}>
          Iniciar análisis →
        </button>

        <p style={{ marginTop: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          Todo tiene solución
        </p>
      </div>
    </div>
  );
}
