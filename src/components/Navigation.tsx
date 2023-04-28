import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <Link to="/">Homepage</Link> &nbsp;|&nbsp;
        <Link to="blog">Blog</Link>
      </div>
    </>
  );
};

export default Navigation;
