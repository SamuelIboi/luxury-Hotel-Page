import {
  IconBeach,
  IconRipple,
  IconTrees,
  IconChessKing,
  IconHome2,
  IconBuildingSkyscraper,
  IconMountain,
  IconSnowflake,
  IconShip,
  IconTent,
  IconWindmill,
  IconPool,
} from "@tabler/icons-react";

const categories = [
  { name: "Beachfront", count: 316, icon: IconBeach, badge: "Top rated" },
  { name: "Lakefront", count: 196, icon: IconRipple, badge: "Trending" },
  { name: "Tropical", count: 248, icon: IconTrees, badge: "Guest favorite" },
  { name: "Castles", count: 74, icon: IconChessKing, badge: "Top rated" },
  { name: "Farmhouse", count: 126, icon: IconHome2, badge: "Trending" },
  {
    name: "City",
    count: 294,
    icon: IconBuildingSkyscraper,
    badge: "Guest favorite",
  },
  { name: "Mountain", count: 183, icon: IconMountain, badge: "Top rated" },
  { name: "Ski resort", count: 91, icon: IconSnowflake, badge: "Trending" },
  { name: "Houseboat", count: 57, icon: IconShip, badge: "Guest favorite" },
  { name: "Camping", count: 142, icon: IconTent, badge: "Top rated" },
  { name: "Countryside", count: 218, icon: IconWindmill, badge: "Trending" },
  { name: "Luxury villa", count: 309, icon: IconPool, badge: "Guest favorite" },
];

const badgeStyles = {
  "Top rated": "bg-amber-50  text-amber-800",
  Trending: "bg-pink-50   text-pink-800",
  "Guest favorite": "bg-emerald-50 text-emerald-800",
};

const CategoryScroll = () => (
  <div className="flex gap-3 overflow-x-auto scrollbar-hide py-4">
    {categories.map((cat) => {
      const Icon = cat.icon; // ← capitalise so JSX treats it as a component
      return (
        <div
          key={cat.name}
          className="shadow-sm hover:shadow-xl duration-300 flex-none w-40 bg-white border border-gray-200 rounded-3xl p-4 relative"
        >
          <span
            className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${badgeStyles[cat.badge]}`}
          >
            {cat.badge}
          </span>
          <Icon size={28} className="text-gray-800 mt-8 mb-1" />{" "}
          {/* ← render as component */}
          <p className="text-sm font-medium text-gray-900 mb-0.5">{cat.name}</p>
          <p className="text-xs text-gray-300 font-extralight">
            {cat.count} activities
          </p>
        </div>
      );
    })}
  </div>
);

export default CategoryScroll;
