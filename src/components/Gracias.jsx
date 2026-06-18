import BgNodes from './BgNodes';

export default function Gracias({ datos }) {
  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content" style={{ textAlign: 'center' }}>

        {/* Icono de confirmación */}
        <div className="nio-thankyou-icon">✓</div>

        <h2 style={{ fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.5px' }}>
          ¡Todo listo, {datos?.lead?.nombre?.split(' ')[0] || 'amigo'}!
        </h2>

        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: '1.6', maxWidth: '440px', margin: '0 auto 40px' }}>
          Tu diagnóstico ha sido recibido. Un especialista de NIO Solutions
          te contactará en las próximas <strong style={{ color: 'rgba(255,255,255,0.8)' }}>24 horas</strong> por WhatsApp.
        </p>

        {/* Resumen */}
        <div className="nio-card" style={{ padding: '20px 24px', marginBottom: '32px', textAlign: 'left' }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
            Resumen de tu diagnóstico
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Empresa', value: datos?.lead?.empresa },
              { label: 'Sector', value: datos?.sector },
              { label: 'Tarea principal', value: datos?.tarea },
              { label: 'Horas a ahorrar', value: `${datos?.horas}h por semana` },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '500', textTransform: 'capitalize' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slogan */}
        <p style={{ fontSize: '18px', fontWeight: '600' }} className="nio-gradient-text">
          Todo tiene solución.
        </p>
        <p style={{ marginTop: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>
          NIO Solutions · Automatización Empresarial
        </p>

      </div>
    </div>
  );
}
