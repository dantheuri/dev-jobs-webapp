import desktopBackgroundHeader from "../assets/desktop/bg-pattern-header.svg";
import mobileBackgroundHeader from "../assets/mobile/bg-pattern-header.svg";
import mobileFilterIcon from "../assets/mobile/icon-filter.svg";
import SearchIcon from "./svgs/SearchIcon";
import LocationIcon from "../assets/desktop/icon-location.svg";
import Logo from "../assets/desktop/logo.svg";

const Header = () => {
  return (
    <header className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopBackgroundHeader} />
        <source media="(max-width: 767px)" srcSet={mobileBackgroundHeader} />
        <img
          src={mobileBackgroundHeader}
          alt="Header Background Pattern"
          className="w-full h-auto"
        />
      </picture>

      {/* Logo - positioned absolutely over the background */}
      <div className="absolute top-0 left-0 w-full">
        <div className="w-[85%] lg:max-w-[70rem] mx-auto ">
          <div className="flex items-center h-16 sm:h-20">
            <img src={Logo} alt="Logo" className="h-8 sm:h-10" />
          </div>
        </div>
      </div>

      {/* Search Filters - positioned below the background */}
      <div className="flex justify-center -mt-8 sm:-mt-10">
        <div className="w-[85%] max-w-[20.5rem] sm:max-w-[35rem] lg:max-w-[70rem] bg-white rounded-lg shadow-lg flex items-center px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 w-full py-3 sm:py-4">
            {/* Title Filter */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <SearchIcon
                color="#5964E0"
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              />
              <input
                type="text"
                placeholder="Filter by title..."
                className="flex-1 border-none outline-none text-sm sm:text-base placeholder:text-gray-400 min-w-0"
              />
            </div>

            {/* Location Filter - hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <img
                src={LocationIcon}
                alt="Location Pin"
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 object-contain"
              />
              <input
                type="text"
                placeholder="Filter by location..."
                className="flex-1 border-none outline-none text-sm sm:text-base placeholder:text-gray-400 min-w-0"
              />
            </div>

            {/* Filter Icon */}
            <img
              src={mobileFilterIcon}
              alt="Mobile Filter Icon"
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            />

            {/* Search Button */}
            <button className="size-8 sm:size-10 lg:w-[7.7rem] bg-[#5964E0] flex items-center justify-center rounded-md flex-shrink-0 hover:bg-[#4A55D1] transition-colors cursor-pointer">
              <SearchIcon
                color="white"
                className="w-4 h-4 sm:w-5 sm:h-5 sm:hidden"
              />
              <span className="hidden sm:block text-white font-semibold text-sm lg:text-base">
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
