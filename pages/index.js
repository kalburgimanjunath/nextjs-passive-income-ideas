import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Header, Footer, Sidebar, Widgets, Posts } from '../components/';
import Home from './home';
import { EarthoOneProvider } from '@eartho/one-client-react';

export default function Index() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchUsers = async () => {
    await fetch('/api/users')
      .then((res) => res.json())
      .then((result) => setUsers(result.users));
  };
  const fetchPosts = async () => {
    await fetch('/api/posts')
      .then((res) => res.json())
      .then((result) => setPosts(result.posts));
  };
  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);
  return (
    <div>
      {/* <EarthoOneProvider clientId="F82I0MnkpHyTHggIUkPK"> */}
      <Home posts={posts} users={users} />
      {/* </EarthoOneProvider> */}
    </div>
  );
}
