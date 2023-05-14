import { Input, JobListing } from '../../components/';
import React, { useEffect, useState } from 'react';
export default function index() {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const results = await fetch('/api/jobs')
      .then((res) => res.json())
      .then((result) => result.jobs);

    return setJobs(
      // results &&
      //   results.filter((item) => {
      //     return item.id == id;
      //   })
      results
    );
  };
  useEffect(() => {
    fetchJobs();
  });
  return (
    <div>
      <JobListing jobs={jobs} />
    </div>
  );
}
