import { Link } from "react-router";
import { getLogoWithFallback } from "../utils/logoImports";

const JobCards = ({ job }) => {
	const logoData = getLogoWithFallback(job.company);

	return (
		<article className="flex justify-center cursor-pointer font-kumbh w-full  lg:w-full lg:max-w-none pb-6 lg:pb-0 sm:h-[14rem] lg:h-[13rem] bg-white dark:bg-[#19202D] rounded-xl mt-12">
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
				<Link to={`/job/${job.id}`}>
					<div className="flex flex-col gap-2 mt-4">
						<span className="flex gap-2 text-gray-500 dark:text-[#9DAEC2]">
							<p>{job.postedAt}</p>
							<p>{job.contract}</p>
						</span>
						<h1 className="text-xl font-bold dark:text-white line-clamp-1">
							{job.position}
						</h1>
						<p className="text-gray-500 dark:text-[#9DAEC2]">{job.company}</p>
					</div>

					<p className="text-[#5964E0] font-bold mt-6">{job.location}</p>
				</Link>
			</div>
		</article>
	);
};

export default JobCards;
