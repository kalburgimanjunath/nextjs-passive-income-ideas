// import { useEarthoOne } from '@eartho/one-client-react';
import { Header, Footer, Sidebar, Widgets, Posts } from '../components/';
import styles from '../styles/Home.module.css';
export default function Home({ posts, users }) {
  // const { isLoading, isConnected, error, user, connectWithPopup, logout } =
  //   useEarthoOne();
  // useEffect(() => {});

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }
  // if (isConnected) {
  //   return (
  //     <div>
  //       Hello {user.displayName}
  //       <button onClick={() => logout({ returnTo: window.location.origin })}>
  //         Log out
  //       </button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <button
  //       className="btn btn-outline-success"
  //       id="login"
  //       onClick={() => connectWithPopup({ access_id: 'wAXNIrrIkProRJubXNta' })}
  //     >
  //       Log in
  //     </button>
  //   );
  // }
  return (
    <div className={styles.container}>
      {/* <Sidebar /> */}

      <Posts posts={posts} />
      <Widgets title="Popular Publishers" type="user" lists={users} />
    </div>
  );
}
