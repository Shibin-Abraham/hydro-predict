

// eslint-disable-next-line react/prop-types
const RainGaugeIcon = ({ className }) => {
    return (
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="60" height="60" viewBox="0 0 24 24" className={className}>
        <g>
        <circle cx="12" cy="18" r="3" fill="#3B82F6" stroke="#2563eb" strokeWidth="0.5"/>
          <rect x="10" y="1" width="4" height="12" fill="#E0E7FF" stroke="#2563eb" strokeWidth="0.5"/>
          
          <rect x="10" y="7" width="4" height="6" fill="#3B82F6"/>
          
          
         
          <line x1="10" y1="4" x2="9" y2="4" stroke="#2563eb" strokeWidth="0.5"/>
          <line x1="10" y1="6" x2="9" y2="6" stroke="#2563eb" strokeWidth="0.5"/>
          <line x1="10" y1="8" x2="9" y2="8" stroke="#2563eb" strokeWidth="0.5"/>
          <line x1="10" y1="10" x2="9" y2="10" stroke="#2563eb" strokeWidth="0.5"/>
          
        </g>
      </svg>
    )
}

export default RainGaugeIcon