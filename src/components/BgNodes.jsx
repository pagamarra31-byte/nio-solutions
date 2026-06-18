// Decoración de fondo con nodos conectados — estilo NIO branding
export default function BgNodes() {
  return (
    <div className="nio-bg-nodes">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Líneas de conexión */}
        <line x1="100" y1="150" x2="320" y2="280" stroke="#6366f1" strokeWidth="1"/>
        <line x1="320" y1="280" x2="580" y2="200" stroke="#6366f1" strokeWidth="1"/>
        <line x1="580" y1="200" x2="820" y2="350" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="820" y1="350" x2="1100" y2="220" stroke="#6366f1" strokeWidth="1"/>
        <line x1="320" y1="280" x2="450" y2="480" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="450" y1="480" x2="700" y2="560" stroke="#6366f1" strokeWidth="1"/>
        <line x1="700" y1="560" x2="950" y2="480" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="950" y1="480" x2="1100" y2="600" stroke="#6366f1" strokeWidth="1"/>
        <line x1="150" y1="500" x2="320" y2="280" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="580" y1="200" x2="450" y2="480" stroke="#6366f1" strokeWidth="1"/>
        <line x1="820" y1="350" x2="700" y2="560" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="200" y1="700" x2="450" y2="480" stroke="#6366f1" strokeWidth="1"/>
        <line x1="700" y1="560" x2="820" y2="700" stroke="#8b5cf6" strokeWidth="1"/>

        {/* Nodos */}
        {[
          [100,150],[320,280],[580,200],[820,350],[1100,220],
          [450,480],[700,560],[950,480],[1100,600],[150,500],
          [200,700],[820,700]
        ].map(([cx,cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#6366f1" opacity="0.6"/>
            <circle cx={cx} cy={cy} r="12" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.3"/>
          </g>
        ))}
      </svg>
    </div>
  );
}
