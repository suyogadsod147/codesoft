import React from 'react';

const Button = ({label}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-4"
    >
      {label}
    </button>
  );
};

export default Button;


// import React from 'react';

// const Button = ({ onClick, label }) => {
//   return (
//     <button onClick={onClick}>
//       {label}
//     </button>
//   );
// };

// export default Button;
