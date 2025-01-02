import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";


const Search = () => {
    return ( 
        <div className="flex rounded-full bg-slate-100 opacity-90 items-center px-2  py-[0.10rem] pb-[0.10rem] ">
            <div className="Search-icon">
                <SearchIcon className="text-slate-800" strokeWidth={"1"}/>
            </div>  
            
                <div className="hidden md:block">
                    <Input placeholder="Search" className="font-light !text-lg"/>
                </div>

        </div>
     );
}
export default Search;