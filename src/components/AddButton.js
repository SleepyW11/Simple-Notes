import "../css/AddButton.css";

const AddButton = (props) => {
  return (
    <div>
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.isAdd ? "add-button blur" : "add-button"}
        onClick={props.toggleAdd}
      >
        <path
          d="M23.5 0C17.2907 0.0749137 11.3568 2.57485 6.96582 6.96582C2.57485 11.3568 0.0749137 17.2907 0 23.5C0.0749137 29.7093 2.57485 35.6432 6.96582 40.0342C11.3568 44.4252 17.2907 46.9251 23.5 47C29.7093 46.9251 35.6432 44.4252 40.0342 40.0342C44.4252 35.6432 46.9251 29.7093 47 23.5C46.9251 17.2907 44.4252 11.3568 40.0342 6.96582C35.6432 2.57485 29.7093 0.0749137 23.5 0ZM36.9286 25.1786H25.1786V36.9286H21.8214V25.1786H10.0714V21.8214H21.8214V10.0714H25.1786V21.8214H36.9286V25.1786Z"
          fill="#008DDC"
        />
      </svg>
    </div>
  );
};

export default AddButton;
