"use client";

export default function CricketAnimation() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden">
      <style jsx>{`
        .bat {
          transform-origin: bottom center;
          animation: bat-swing 1.5s ease-in-out infinite;
        }
        .ball {
          animation: ball-fly 1.5s ease-out infinite;
        }
        @keyframes bat-swing {
          0%,
          100% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(-60deg);
          }
        }
        @keyframes ball-fly {
          0%,
          45% {
            transform: translate(-80px, 30px);
            opacity: 1;
          }
          55% {
            transform: translate(-30px, -10px);
          }
          100% {
            transform: translate(150px, -80px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
      <div className="ball absolute h-6 w-6 rounded-full border-2 border-white bg-red-500 dark:bg-red-600"></div>
      <div
        className="bat absolute h-32 w-6 rounded-t-full rounded-b-md bg-yellow-600 dark:bg-yellow-700"
        style={{ boxShadow: "inset 2px -5px rgba(0,0,0,0.2)" }}
      >
        <div className="absolute bottom-0 h-10 w-full rounded-b-md bg-yellow-700 dark:bg-yellow-800"></div>
      </div>
    </div>
  );
}
