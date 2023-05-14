import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return <div>Welcome to the app{session.user.email}</div>;
    <button onClick={() => signOut()}>SignOut</button>;
  } else {
    return (
      <div>
        you are not logged in <button onClick={() => signIn()}>Signin</button>
      </div>
    );
  }
}
