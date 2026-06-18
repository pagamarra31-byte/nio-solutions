import { useState } from 'react';
import BgNodes from './BgNodes';

export default function FormularioLead({ datos, onNext }) {
  const [form, setForm] = useState({ nombre: '', empresa: '', whatsapp: '', correo: '' });
  const [enviando, setEnviando] = useState(false);

  const canSend = form.nombre.trim() && form.empresa.trim() && form.whatsapp.trim() && form.correo.trim();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!canSend) return;
    setEnviando(true);

    // Aquí irá el webhook de N8N en el futuro.
    // Por ahora solo simulamos un envío de 1.5 segundos.
    await new Promise(r => setTimeout(r, 1500));

    // Datos que se enviarán al webhook (descomentar cuando tengas N8N):
    // await fetch('TU_WEBHOOK_N8N', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...form, ...datos }),
    // });

    setEnviando(false);
    onNext({ lead: form });
  }

  return (
    <div className="nio-screen">
      <BgNodes />
      <div className="nio-content">

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
            Último paso
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.3px' }}>
            Recibe tu plan de{' '}
            <span className="nio-gradient-text">automatización</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px' }}>
            Un especialista de NIO Solutions te contactará en menos de 24 horas.
          </p>
        </div>

        <div className="nio-card" style={{ padding: '28px 24px' }}>
          {/* Nombre */}
          <div className="nio-form-group">
            <label className="nio-form-label">Tu nombre</label>
            <input
              className="nio-input"
              name="nombre"
              placeholder="Ej: Carlos Rodríguez"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          {/* Empresa */}
          <div className="nio-form-group">
            <label className="nio-form-label">Nombre de tu empresa</label>
            <input
              className="nio-input"
              name="empresa"
              placeholder="Ej: Constructora ABC S.A."
              value={form.empresa}
              onChange={handleChange}
            />
          </div>

          {/* WhatsApp */}
          <div className="nio-form-group">
            <label className="nio-form-label">WhatsApp (con código de país)</label>
            <input
              className="nio-input"
              name="whatsapp"
              placeholder="Ej: +51 999 888 777"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </div>

          {/* Correo */}
          <div className="nio-form-group" style={{ marginBottom: 0 }}>
            <label className="nio-form-label">Correo electrónico</label>
            <input
              className="nio-input"
              name="correo"
              type="email"
              placeholder="Ej: carlos@empresa.com"
              value={form.correo}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="nio-btn-primary"
          onClick={handleSubmit}
          disabled={!canSend || enviando}
          style={{
            width: '100%',
            justifyContent: 'center',
            fontSize: '16px',
            padding: '16px',
            marginTop: '16px',
            opacity: canSend && !enviando ? 1 : 0.4,
            cursor: canSend && !enviando ? 'pointer' : 'not-allowed',
          }}
        >
          {enviando ? '⏳ Enviando...' : 'Quiero mi plan gratuito →'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
          🔒 Tus datos son privados y nunca serán compartidos con terceros
        </p>

      </div>
    </div>
  );
}
