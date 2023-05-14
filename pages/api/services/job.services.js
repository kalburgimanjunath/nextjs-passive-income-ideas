export const getAllJobs = async () => {
  const allJobs = await fetch('./api/jobs').then((res) => res.json());
  (result) => result.json(result.jobs);
  return allJobs;
};
export const getJobById = () => {
  return;
};
