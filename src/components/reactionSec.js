const REACTIONS = ["🔥", "👍", "😍", "💙", "✌️", "🏖️"];

const ReactionSec = () => {
  return (
    <div className="flex items-center justify-center w-full">
      {REACTIONS.map((emoji, index) => (
        <button
          key={emoji}
          className="btn btn-circle btn-sm bg-white p-1 rounded-full shadow-md -ml-2 first:ml-0 hover:z-10 transition-transform hover:scale-110"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionSec;
