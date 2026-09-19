import sbk from "../assets/sbk1.png";
import TabBar from "./tadbar";

const Navbar = () => {
  return (
    <div className="p-[15px] text-sm text-black">
      <div className="flex flex-row rounded-lg text-center items-center text-black font-bold ">
        <div className="w-1/5">
          <img src={sbk} alt="Skybound logo" className="h-13" />
        </div>
        <div className="w-3/5">
          <TabBar />
        </div>
        <div className="w-1/5 flex flex-row items-center justify-end">
          <div>Log In</div>
          <div className="bg-black mx-3 p-3 px-5 text-white rounded-3xl">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
