

import example from "../assets/example.png"
// Main App component that renders the ShineBorderCard

// ShineBorderCard component
const ShineBorderCard = () => {
  return (
    // The outer div acts as the container for the card, setting its base styles
    <div className="relative p-0.5 rounded-xl overflow-hidden bg-gray-800 shadow-2xl max-w-lg w-full">

      <div className="absolute inset-0 rounded-xl z-0 animate-shine-border bg-gradient-to-l from-yellow-500 via-green-500 to-transparent opacity-90 blur-2xl"></div>


      <div className="relative z-10 bg-gray-800 rounded-lg h-full w-full">



        <img className='rounded-xl   object-cover  ' src={example} />

      </div>


      <style>{`
        @keyframes shine-border {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shine-border {
          background-size: 200% 100%; /* Make the gradient wider than the element */
          /* Changed animation duration from 3s to 6s for a slower effect */
          animation: shine-border 2s linear infinite; /* Apply the animation */
        }
      `}</style>
    </div>
  );
};

export default ShineBorderCard;
