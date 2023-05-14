import { Input } from '../../components/';
export default function index() {
  return (
    <div>
      <h4>Edit my public profile</h4>
      <div>These infos will be display in your public profile.</div>
      <div>
        <Input type="text" label="username" />
        <Input type="text" label="email" />
        <Input type="text" label="address" />
        <Input type="text" label="Upload your public picture" />
        <Input type="text" label="name" />
        <Input type="text" label="where you are born" />
        <Input type="text" label="headline" />
        <Input type="text" label="about you" />
      </div>
      <footer>
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-default">Cancel</button>
      </footer>
    </div>
  );
}
