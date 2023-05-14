// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  const jobs = [
    {
      id: 1,
      company_name: 'Honeywell technology solutions lab',
      company_address: '#189,Ravi nagar,gokul road hubli',
      location: 'hubli',
      job_title: 'Software Engineer',
      job_description: 'job description',
      tags: ['software', 'architect', 'react', 'angular'],
      experiance_range: '1-5',
      salary_range: ['50000-500500'],
      phone: 9986407307,
      email: 'manjunath@gmail.com',
      notice_period: '15 days',
    },
  ];
  res.status(200).json({ jobs: jobs });
};
