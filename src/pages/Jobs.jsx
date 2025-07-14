// Jobs.jsx
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/api/browse/pro-jobs/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API response:", data);
        setJobs(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load jobs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner></Spinner>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 bg-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            {job.title}
          </h2>

          <p className="text-gray-600 mb-1">
            <span className="font-medium">Category:</span> {job.category?.title}{" "}
            / {job.sub_category?.title}
          </p>

          <p className="text-gray-600 mb-1">
            <span className="font-medium">Type:</span> {job.job_type?.title}
          </p>

          <div className="text-gray-600 mb-1">
            <input
              id={`budget-${job.id}`}
              type="text"
              placeholder={`Fixed Price Project                       $${job.rate_from} - $${job.rate_to} (${job.budget_type})`}
              className="border border-gray-300 rounded px-3 py-2 w-full placeholder:text-sm"
            />
          </div>

          <p className="text-gray-600 mb-1">
            <span className="font-medium">Experience:</span>{" "}
            {job.experience_level}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Duration:</span>{" "}
            {job.project_duration}
          </p>

          <div className="mt-4">
            <p className="font-medium mb-1">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-medium mb-1">Languages:</p>
            <div className="flex flex-wrap gap-2">
              {job.language.map((lang) => (
                <span
                  key={lang.id}
                  className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                >
                  {lang.title}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            {job.job_attachments.map((att) => (
              <img
                key={att.id}
                src={att.file}
                alt="attachment"
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
            ))}
          </div>
          {/* Apply Button */}
          <button
            className="mt-6 w-35 bg-black hover:bg-[#05af2b] text-white py-2 px-4 rounded-full transition"
            onClick={() => alert(`Applied to ${job.title}`)} // Replace with real handler
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
