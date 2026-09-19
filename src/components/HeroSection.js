import bg from "../assets/beachouse.jpg";
import Navbar from "./Navbar";
import LeftComp from "./LeftComp";
import ReactionSec from "./reactionSec";
import BoxOut from "./BoxOut";
import Calender from "./calender";
import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import CategoryScroll from "./bottcomp";

const HeroSection = () => {
  return (
    <div>
      <div className="relative h-[400px]">
        {/* Image container — clips the blur independently */}
        <div className="absolute inset-0 rounded-b-4xl overflow-hidden">
          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover blur-[3px]"
          />
        </div>

        {/* Overlay content — sits on top, not clipped */}
        <div className="absolute inset-0 z-10">
          <Navbar />
          <div className="flex h-[200px] items-center p-5 my-4 text-white">
            <div className="w-1/5">
              <LeftComp />
            </div>
            <div className="w-3/5 text-center flex flex-col gap-5">
              <div className="text-6xl font-bold">Explore City</div>
              <div className="text-sm mb-4 font-light">
                Explore the beauty of the great outdoors
              </div>
              <div>
                <ReactionSec />
              </div>
              <div className="underline text-sm">loved from 500k users</div>
            </div>
            <div className="w-1/5">
              <Calender />
            </div>
          </div>

          {/* BoxOut is outside the clipped div, so it's free to overflow */}
          <div className="w-full absolute bottom-[-15%]">
            <BoxOut />
          </div>
        </div>
      </div>
      <div className="mt-30 px-8 flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-bold">Select Category</div>
            <div className="text-sm text-gray-500">
              Uncover the perfect match in every Category
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2 border-solid border-gray-300 border-1 rounded-4xl  items-center text-sm text-center p-2 px-4">
              <AdjustmentsHorizontalIcon className="w-5 h-5" /> filters
            </div>
            <ChevronLeftIcon className="border-solid border-gray-300 border-1 rounded-4xl  items-center text-sm text-center px-2 w-10 h-10 fill-gray-500" />
            <ChevronRightIcon className="border-solid border-gray-300 border-1 rounded-4xl  items-center text-sm text-center px-2 w-10 h-10 fill-gray-500" />
          </div>
        </div>
        <div>
          <CategoryScroll />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
