export default (req, res) => {
  const category = [
    'Dropshipping',
    'Affiliate Marketing',
    'Beer Money',
    'Make Money Online',
    'Investments',
    'no tech side hustle',
    'inspiring stories',
    'tools',
    'discussion topics',
  ];
  res.status(200).json({ category: category });
};
