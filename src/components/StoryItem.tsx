import { BookmarkPlusIcon, MinusCircleIcon, StarIcon } from "lucide-react";
import { PiHandsClappingDuotone } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineBookmarkAdd } from "react-icons/md";


import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const StoryItem = ({
  organization,
  organizationName,
  author,
  heading,
  description,
  publishedOn,
  claps,
  comments,
  storyLink,
  previewImage,
  showLess,
  

}: {
  organization?: boolean;
  organizationName?: string;
  author: string;
  heading: string;
  description: string;
  publishedOn: string;
  claps: string;
  comments: string;
  storyLink: string;
  previewImage: string;
  showLess: boolean;
  organizationIcon?: string;
}) => {
  return (
    <div className="flex flex-col p-5 border-b-[2px]">
      {organization ? (
        <div className="flex gap-2 items-center">
          <div className="text-sm font-light text-slate-700">In</div>
          <div className="text-md font-semibold  text-gray-800">
            {organizationName}
          </div>
          <div className="text-sm font-light text-slate-700">by</div>
          <div className="text-md font-normal text-slate-900">{author}</div>
        </div>
      ) : (
        <div>
          <div className="text-md font-semibold text-gray-800">{author}</div>
        </div>
      )}

      <div className="flex flex-col md:flex-row pt-2 ">
        <div className="w-full md:w-[70%] space-y-4">
          <div className="heading and description flex flex-col space-y-2">
            <div className="text-3xl text-wrap font-extrabold gap-2">
              {heading}
            </div>
            <h3 className="font-sans text-md font-light">{description}</h3>
          </div>

          <div className="flex flex-col md:flex-row  justify-between pr-10 items-center space-y-5 md:space-x-0 ">
            <div className="flex gap-x-5 items-center">
              <StarIcon fill={"yellow"} strokeWidth={"1"} size={20} />
              <div className="font-sans font-light text-sm">Dec 15 2024</div>
              <PiHandsClappingDuotone strokeWidth={"1"} size={20} />
              <FaRegComment strokeWidth={"1"} size={20} color="gray" />
            </div>
            <div className="flex items-center gap-x-5 ">
                <MinusCircleIcon strokeWidth={"0.9"} size={20} />
                <MdOutlineBookmarkAdd className="font-light" size={20} color="gray"/>
                <BsThreeDots strokeWidth={"0.7"} size={15} />
                
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[30%]   md:0  items-center ">
          <Image
            src={"/sample1-storyItem.png"}
            alt="image related to the article"
            height={220}
            width={220}
            
          />
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
