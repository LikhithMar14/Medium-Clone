import Logo from "@/components/Nav-logo";
import Search from "@/components/Search";
import {
  BellDot,
  BellIcon,
  CircleUserRound,
  CircleUserRoundIcon,
  SquarePenIcon,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" px-8 border-b-[1px] shadow-sm items-center sticky top-0 z-10 bg-white py-1">
      <div className="flex justify-between items-center m-2">
        <div className="flex justify-between gap-x-6">
          <Logo height={150} width={150} priority={true} />
          {/* Search Component */}
          <Search />
        </div>
        <div className="flex justify-between space-x-10">
          <Link href={"/notifications"} passHref>
            <BellIcon strokeWidth={"1"} className="font-extralight" size={27} />
          </Link>

          <Link href={"/write"} passHref>
            <SquarePenIcon
              strokeWidth={"1"}
              className="font-extralight"
              size={27}
            />
          </Link>

          <Link href={"/profile"} passHref>
            <CircleUserRoundIcon
              strokeWidth={"1"}
              className="font-extralight"
              size={27}
            />
          </Link>
          {/* write */}
          {/* notifications */}
          {/* Profile */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
