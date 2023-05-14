import { Input } from '../../components/';
export default function index() {
  return (
    <div>
      <h4>public profile</h4>
      <div>These infos will be display in your public profile.</div>
      <div>
        <Input label="username" />
        <Input label="email" />
        <Input label="address" />
        <Input label="Upload your public picture" />
        <Input label="your name" />
        <Input label="where you are born" />
        <Input label="headline" />
        <Input label="about you" />
      </div>
      <div>RECENT POSTS</div>
    </div>
  );
}
