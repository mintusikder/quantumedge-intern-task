// Jobs.jsx
import { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/api/browse/pro-jobs/")// ✅ this is now proxied
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API response:", data);
        setJobs(data.data); // ✅ only job list
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load jobs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 rounded shadow">
            <p><strong>Title:</strong> {job.title}</p>
            <p><strong>Category:</strong> {job.category?.title}</p>
            <p><strong>Rate:</strong> {job.rate_from} - {job.rate_to}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
