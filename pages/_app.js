import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Sidebar } from '../components/';
// import store from '../redux/store';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Header />
      <div style={{ display: 'flex' }}>
        <SessionProvider session={session}>
          <Sidebar session={session} />
          <div style={{ padding: 20 }}>
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
