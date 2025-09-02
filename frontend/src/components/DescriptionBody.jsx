const DescriptionBody = ({ job }) => {
  return (
    <main>
      <div className="companyInformationWrapper flex justify-center -mt-3 md:-mt-8 lg:-mt-8 sm:-mt-10 lg:px-10">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] bg-white dark:bg-[#19202D] rounded-lg shadow-lg flex items-center px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-6 w-full py-3 sm:py-4">
            <h1 className="text-xl font-bold dark:text-white">{job.company}</h1>
            <p className="text-gray-500 dark:text-[#9DAEC2]">{job.website}</p>
            <button className=" bg-[#5964E01A] w-[9rem] h-12">
              <h2 className="text-base font-bold text-[#5964E0]">
                Company Site
              </h2>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10">
        <div className="bg-white dark:bg-[#19202D] w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] px-6 py-8 rounded-md">
          <div className="sm:flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="flex gap-2 items-center text-gray-500 dark:text-[#9DAEC2]">
                <p>{job.postedAt}</p>
                <span className="text-2xl leading-none">•</span>
                <p>{job.contract}</p>
              </span>
              <h1 className="font-bold text-xl dark:text-white">
                {job.position}
              </h1>
              <p className="font-bold text-sm text-[#5964E0]">{job.location}</p>
            </div>
            <button className="bg-[#5964E0] sm:w-[9rem] text-white px-4 py-2 rounded-md w-full font-bold mt-8 mb-6">
              Apply Now
            </button>
          </div>

          <div className="leading-[1.625rem] sm:mt-8 text-[#19202D] dark:text-[#9DAEC2]">
            <p>{job.description}</p>
            <h1 className="font-bold text-xl mt-8 dark:text-white">
              Requirements
            </h1>
            <p className="mt-5">{job.requirements.content}</p>
            <ul className="list-disc list-outside marker:text-[#5964E0] mt-5 pl-4 space-y-2">
              {job.requirements.items.map((item) => (
                <li key={item}>
                  <p className="pl-2">{item}</p>
                </li>
              ))}
            </ul>
            <h1 className="font-bold text-xl mt-8 text-[#19202D] dark:text-white">
              What You Will Do
            </h1>
            <p className="mt-5">{job.role.content}</p>
            <ol className="list-decimal list-outside marker:text-[#5964E0] mt-5 pl-3 space-y-2">
              {job.role.items.map((item) => (
                <li key={item}>
                  <p className="pl-2">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full bg-white  dark:bg-[#19202D] mt-8 py-6 flex justify-center">
          <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] sm:flex sm:justify-between">
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold dark:text-white">{job.position}</h1>
              <p className="text-gray-500 dark:text-[#9DAEC2]">{job.company}</p>
            </div>  
            <button className="bg-[#5964E0] sm:w-[9rem] w-full text-white px-4 py-2 rounded-md font-bold">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DescriptionBody;
