import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};
function SearchBar({
  value,
  onChange,
  onSearch,
}: Props) {
  return (
    <div className="relative w-full  md:w-[500px]">
   <input
  value={value}
  onChange={(e) => onChange(e.target.value)}
  type="text"
  placeholder="جستجوی یادداشت..."
  className="w-full rounded-xl border border-gray-200 py-2 pr-14 pl-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
/>

<button
  onClick={onSearch}
  className="
    absolute
    left-0
    top-1/2
    flex
    h-10
    w-10
    -translate-y-1/2
    items-center
    justify-center
    rounded-lg
    bg-orange-500
    text-white
  "
>
  <Search size={18} />
</button>
    </div>
  )
}

export default SearchBar