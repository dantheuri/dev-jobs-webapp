import JobCards from "./JobCards";
import jobs from "../data/data.json";
import SearchIcon from "./svgs/SearchIcon";
import locationIcon from "../assets/desktop/icon-location.svg";
import mobileFilterIcon from "../assets/mobile/icon-filter.svg";

import { useState, useEffect } from "react";

const Jobs = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [displayedJobs, setDisplayedJobs] = useState(jobs);

  const handleSearch = () => {
    const filteredJobs = jobs.filter((job) => {
      const matchesTitle =
        titleFilter.trim() === "" ||
        job.position.toLowerCase().includes(titleFilter.toLowerCase()) ||
        job.company.toLowerCase().includes(titleFilter.toLowerCase());

      const matchesLocation =
        locationFilter.trim() === "" ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesContract =
        !fullTimeOnly || job.contract.toLowerCase() == "full time";

      return matchesTitle && matchesLocation && matchesContract;
    });
    setDisplayedJobs(filteredJobs);
  };

  const handleReset = () => {
    setTitleFilter("");
    setLocationFilter("");
    setFullTimeOnly("");
    setDisplayedJobs(jobs);
  };

  return (
    <main className="pb-20">
      <div className="searchFiltersWrapper flex justify-center -mt-8 md:-mt-8 lg:-mt-8 sm:-mt-10 lg:px-10">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] bg-white rounded-lg shadow-lg flex items-center px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 w-full py-3 sm:py-4">
            {/* Title Filter */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <SearchIcon
                color="#5964E0"
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 hidden sm:block"
              />
              <input
                type="text"
                placeholder="Filter by title..."
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
                className="flex-1 border-none outline-none text-sm sm:text-base placeholder:text-gray-400 min-w-0"
              />
            </div>

            {/* Location Filter - hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <img
                src={locationIcon}
                alt="Location Pin"
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 object-contain "
              />
              <input
                type="text"
                placeholder="Filter by location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="flex-1 border-none outline-none text-sm sm:text-base placeholder:text-gray-400 min-w-0"
              />
            </div>

            {/* Full Time Only Checkbox - hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <input
                type="checkbox"
                id="fullTimeOnly"
                checked={fullTimeOnly}
                onChange={(e) => setFullTimeOnly(e.target.checked)}
                className="w-4 h-4 text-[#5964E0] bg-gray-100 border-gray-300 rounded focus:ring-[#5964E0] focus:ring-2"
              />
              <label
                htmlFor="fullTimeOnly"
                className="text-sm font-medium text-gray-900 whitespace-nowrap cursor-pointer"
              >
                Full Time Only
              </label>
            </div>

            {/* Filter Icon */}
            <img
              src={mobileFilterIcon}
              alt="Mobile Filter Icon"
              className="sm:hidden w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            />
            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="size-8 sm:w-20 sm:h-10 lg:w-[7.7rem] bg-[#5964E0] flex items-center justify-center rounded-md flex-shrink-0 hover:bg-[#4A55D1] transition-colors cursor-pointer"
            >
              <SearchIcon
                color="white"
                className="w-4 h-4 sm:w-5 sm:h-5 sm:hidden"
              />
              <span className="hidden sm:block text-white font-semibold text-sm lg:text-base">
                Search
              </span>
            </button>
            {/* 🔹 Reset Button */}
            <button
              onClick={handleReset}
              className="size-8 sm:w-20 sm:h-10 lg:w-[7.7rem] bg-gray-300 text-gray-800 flex items-center justify-center rounded-md flex-shrink-0 hover:bg-gray-400 transition-colors cursor-pointer"
            >
              <span className="hidden sm:block font-semibold text-sm lg:text-base">
                Reset
              </span>
              <span className="sm:hidden text-xs font-bold">X</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {displayedJobs.length > 0 ? (
            displayedJobs.map((job) => <JobCards key={job.id} job={job} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No jobs found matching your criteria.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your filters.
              </p>
            </div>
          )}
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
