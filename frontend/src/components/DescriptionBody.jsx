import { getLogoWithFallback } from "../utils/logoImports";

const DescriptionBody = ({ job }) => {
  const logoData = getLogoWithFallback(job.company);

  return (
    <main>
      <div className="companyInformationWrapper flex justify-center -mt-3 md:-mt-8 lg:-mt-8 sm:-mt-10">
        <div className="w-[85%] md:w-[43rem] lg:w-[60rem] xl:w-[70rem] bg-white dark:bg-[#19202D] rounded-lg shadow-lg flex items-center">
          <div className="flex flex-col sm:flex-row sm:h-[8rem] items-center gap-6 sm:gap-8  w-full pt-3 pb-8 sm:py-0 sm:pr-6">
            {logoData && (
              <div
                className={`flex justify-center size-[3.5rem] sm:h-full sm:w-[8rem] -mt-10 sm:mt-0 flex-shrink-0 ${
                  logoData.backgroundColor
                    ? `${logoData.backgroundColor} rounded-lg p-2`
                    : ""
                }`}
              >
                <img
                  src={logoData.src}
                  alt={`${job.company} logo`}
                  className="w-full h-full sm:w-20 object-contain"
                />
              </div>
            )}
            <div className="w-full flex flex-col gap-8 sm:flex-row sm:justify-between items-center">
              <div className="space-y-3 w-full text-center sm:text-left">
                <h1 className="text-xl font-bold dark:text-white">
                  {job.company}
                </h1>
                <p className="text-gray-500 dark:text-[#9DAEC2]">
                  {job.website}
                </p>
              </div>

              <button className=" bg-[#5964E01A] w-[9rem] h-12 flex-shrink-0 mx-auto sm:mx-0">
                <h2 className="text-base font-bold text-[#5964E0] dark:text-white">
                  Company Site
                </h2>
              </button>
            </div>
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
              <h1 className="text-xl font-bold dark:text-white">
                {job.position}
              </h1>
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
