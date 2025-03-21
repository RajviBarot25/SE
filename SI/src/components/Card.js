import React from "react";
import { CourseCard } from "../style.js"; // Add `.js` extension


const Card = ({ title, term, color }) => {
  return (
    <CourseCard style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{term}</p>
    </CourseCard>
  );
};

export default Card;



// import React from 'react';
// import { statCardStyles, statCardH2Styles, statCardPStyles } from '../style.js';

// const Card = ({ value, label }) => {
//   return (
//     <div style={statCardStyles}>
//       <h2 style={statCardH2Styles}>{value}</h2>
//       <p style={statCardPStyles}>{label}</p>
//     </div>
//   );
// };

// export default Card;