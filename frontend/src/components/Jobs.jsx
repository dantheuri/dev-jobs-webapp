import JobCards from "./JobCards";
import jobs from "../data/data.json";

const Jobs = () => {
  return (
    <main className="w-full flex justify-center">
      <div className="flex flex-col items-center lg:w-[70rem] lg:grid lg:grid-cols-3 lg:gap-6">
        {jobs.map((job) => (
          <JobCards key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
};

export default Jobs;
