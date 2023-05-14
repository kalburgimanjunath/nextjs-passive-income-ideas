import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getAllJobs, getJobById } from '../api/services/job.services';
export default function index() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const fetchJobs = async () => {
    const results = await fetch('/api/jobs')
      .then((res) => res.json())
      .then((result) => result.jobs);

    return setJobs(
      results &&
        results.filter((item) => {
          return item.id == id;
        })
    );
  };
  useEffect(() => {
    fetchJobs();
  });
  return (
    <div>
      Job:{id}
      <>
        <div>
          {jobs ? (
            <div>
              {jobs.map((item) => {
                return (
                  <div>
                    <div>
                      <h6>{item.job_title}</h6> at {item.company_name}
                    </div>
                    <div>{item.company_address}</div>
                    <div>{item.location}</div>
                    <div>{item.notice_period}</div>
                    <div>{item.salary_range}</div>
                    <div>{item.job_description}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </>
    </div>
  );
}
