// import React from 'react';

// interface ShinyTextProps {
//     text: string;
//     disabled?: boolean;
//     speed?: number;
//     className?: string;
// }

// const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
//     const animationDuration = `${speed}s`;

//     return (
//         <div
//             className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
//             style={{
//                 backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
//                 backgroundSize: '200% 100%',
//                 WebkitBackgroundClip: 'text',
//                 animationDuration: animationDuration,
//             }}
//         >
//             <button>Login</button>
//             {text}
//         </div>
//     );
// };

// export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };



// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          shine: "shine 2s linear infinite",
        },
        keyframes: {
          shine: {
            "0%": { backgroundPosition: "-200% 0" },
            "100%": { backgroundPosition: "200% 0" },
          },
        },
      },
    },
    plugins: [],
  };
  import React from "react";

const ShinyButton = () => {
  return (
    <button
      className="flex justify-end px-6 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] animate-shine rounded-lg bg-gray-900"
    >
        Login
    </button>
  );
};

export default ShinyButton;