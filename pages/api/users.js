// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  const users = [
    {
      id: 1,
      name: 'manjunath kalburgi',
      address: '#189,Ravi nagar,gokul road hubli',
      phone: 9986407307,
      email: 'manjunath@gmail.com',
    },
    {
      id: 1,
      name: 'ravi kalburgi',
      address: '#189,Ravi nagar,gokul road hubli',
      phone: 9986407307,
      email: 'ravi@gmail.com',
    },
  ];
  res.status(200).json({ users: users });
};
