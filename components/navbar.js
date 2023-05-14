import Link from 'next/link';
import Image from 'next/image';
// import logo from '../assets/logo.png';

export default function Navbar({ session }) {
  return (
    <div className="navbar-top">
      <div className="navbar-start">
        <Link href="/">
          Logo
          {/* <Image src={logo} width={70} height={70} alt="logo" /> */}
        </Link>
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/jobs">jobs</Link>
          </li>
          <li>
            <Link href="/ideas">Popular Ideas</Link>
          </li>
          <li>
            <Link href="/contribute">Contribute your Ideas</Link>
          </li>
          <li>
            <Link href="/profile/edit-profile">Edit Profile</Link>
          </li>
          <li>
            <Link href="/public-profile/">Profile</Link>
          </li>
          <li>
            <Link href="/bookmarks">Bookmarks</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
