import { Link } from "react-router-dom";

// CSR(client side rendering)방식으로 빠르게 화면 전환이 가능하다. (새로고침 이루어지지 않음)
const RouteTest = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/edit"}>EDIT</Link>
    </div>
  );
};

export default RouteTest;
