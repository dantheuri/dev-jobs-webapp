import DescriptionHeader from "../components/Header";
import DescriptionBody from "../components/DescriptionBody";
import { useParams } from "react-router";
import jobs from "../data/data.json";

const JobDescription = ({ job }) => {
  const { id } = useParams();
  job = jobs.find((job) => job.id === parseInt(id));

  if (!job) return <h1>Job not found</h1>;

  return (
    <div className="bg-[#F4F6F8] dark:bg-[#121721] font-kumbh min-h-screen">
      <DescriptionHeader job={job} />
      <DescriptionBody job={job} />
    </div>
  );
};

export default JobDescription;
