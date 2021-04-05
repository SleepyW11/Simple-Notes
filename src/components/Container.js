import "../css/Container.css";
import Header from "./Header";
import MainBody from "./MainBody";

const Container = (props) => {
  return (
    <div className={props.isAdd ? "container blur" : "container"}>
      <Header />
      <MainBody />
    </div>
  );
};

export default Container;
