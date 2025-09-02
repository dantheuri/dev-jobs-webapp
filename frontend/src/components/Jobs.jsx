import JobCards from "./JobCards";
import jobs from "../data/data.json";
import SearchIcon from "./svgs/SearchIcon";
import locationIcon from "../assets/desktop/icon-location.svg";
import mobileFilterIcon from "../assets/mobile/icon-filter.svg";

const Jobs = () => {
  return (
    <main>
      <div className="searchFiltersWrapper flex justify-center -mt-8 md:-mt-8 lg:-mt-8 sm:-mt-10 lg:px-10">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] bg-white rounded-lg shadow-lg flex items-center px-3 sm:px-4 lg:px-6">
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
                src={locationIcon}
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
      <div className="w-full flex justify-center">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {jobs.map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-12">
        <button className="bg-[#5964E0] text-white px-4 py-2 rounded-md font-bold hidden md:block">
          Load More
        </button>
      </div>
    </main>
  );
};

export default Jobs;
