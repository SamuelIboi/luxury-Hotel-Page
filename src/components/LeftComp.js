import bitch from "../assets/beachouse.jpg";

const LeftComp = () => {
  return (
    <div className="flex flex-row bg-[#fdb274] rounded-2xl p-3 pr-10 text-white w-fit">
      <img src={bitch} alt="" className="h-10 w-10 rounded-full mr-2" />
      <div className="flex flex-col items-center">
        <div className="font-semibold">Kings Beach</div>
        <div className="font-light text-sm">595 Miles away</div>
      </div>
    </div>
  );
};

export default LeftComp;
