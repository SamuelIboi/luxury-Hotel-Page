import beach from "../assets/beach.jpg";

const Calender = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const progress = [40, 50, 30, 20, 55, 10, 5]; // percentage per day
  const colors = [
    "#a78bfa",
    "#60a5fa",
    "#f472b6",
    "#34d399",
    "#a78bfa",
    "#60a5fa",
    "#f472b6",
  ];
  const circumference = 2 * Math.PI * 10; // r=10

  return (
    <div className="bg-white rounded-3xl border text-sm border-gray-100 p-4 w-56 shadow-sm">
      {/* Hero image */}
      <div className="relative w-full text-sm h-15 rounded-2xl overflow-hidden mb-4">
        <img src={beach} alt="goal" className="w-full h-full object-cover" />
        <div className="absolute bottom-3 left-3 text-white font-medium text-lg leading-tight">
          Set
          <br />
          Your
          <br />
          Goal
        </div>
      </div>

      {/* Progress rings */}
      <div className="flex justify-between px-1 mb-2">
        {days.map((day, i) => {
          const offset = circumference - (progress[i] / 100) * circumference;
          return (
            <svg key={i} width="26" height="26" viewBox="0 0 26 26">
              <circle
                cx="13"
                cy="13"
                r="10"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <circle
                cx="13"
                cy="13"
                r="10"
                fill="none"
                stroke={colors[i]}
                strokeWidth="3"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 13 13)"
              />
            </svg>
          );
        })}
      </div>

      {/* Day labels */}
      <div className="flex justify-between px-1">
        {days.map((day, i) => (
          <span key={i} className="text-xs text-gray-400 w-6 text-center">
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calender;
