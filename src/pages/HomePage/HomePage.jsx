import DocumentTitle from "components/DocumentTitle/DocumentTitle";
import { MdOutlineContactPhone } from "react-icons/md";
// import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1>REGISTER / LOGIN</h1>
      <MdOutlineContactPhone color="green" size={"10rem"} />
    </div>
  );
};

export default HomePage;
