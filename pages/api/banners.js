export default (req, res) => {
  const banners = [
    {
      id: 1,
      category: '',
      url: 'https://images.unsplash.com/photo-1682588383883-f8b5b285e4a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80',
    },
    {
      id: 2,
      category: '',
      url: 'https://images.unsplash.com/photo-1682588383883-f8b5b285e4a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80',
    },
  ];
  res.status(200).json({ banners: banners });
};
