import { getLogoWithFallback } from "../utils/logoImports";

const JobCards = ({ job }) => {
  const logoData = getLogoWithFallback(job.company);

  return (
    <article className="flex justify-center font-kumbh w-[85%] max-w-[20.5rem] lg:w-full lg:max-w-none pb-6 lg:pb-0 lg:h-[13rem] bg-white rounded-xl mt-12">
      <div className="w-full px-6 mt-8">
        {logoData && (
          <div
            className={`size-[3.125rem] -mt-14 ${
              logoData.backgroundColor
                ? `${logoData.backgroundColor} rounded-lg p-2`
                : ""
            }`}
          >
            <img
              src={logoData.src}
              alt={`${job.company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 mt-4">
          <span className="flex gap-2">
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
          </span>
          <h1 className="text-xl font-bold">{job.position}</h1>
          <p>{job.company}</p>
        </div>

        <p className="text-[#5964E0] font-bold mt-6">{job.location}</p>
      </div>
    </article>
  );
};

export default JobCards;
