import { useRef } from "react";
import Card from "./Card";

const FormBox = (props) => {
  // const [name, setName] = useState("");
  // const [live, setLive] = useState("");
  // const [email, setEmail] = useState("");

  const nameInputRef = useRef();
  const liveInputRef = useRef();
  const emailInputRef = useRef();

  const addUser = (event) => {
    event.preventDefault();
    if (
      nameInputRef.current.value.trim().length === 0 ||
      liveInputRef.current.value.trim().length === 0 ||
      emailInputRef.current.value.trim().length === 0
    ) {
      alert("Please need to be fill all inputs !");
      return;
    }
    const userInfo = {
      name: nameInputRef.current.value,
      live: liveInputRef.current.value,
      email: emailInputRef.current.value,
    };
    props.getUserInfo(userInfo);

    nameInputRef.current.value = "";
    liveInputRef.current.value = "";
    emailInputRef.current.value = "";
    // setName("");
    // setLive("");
    // setEmail("");
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            // value={name}
            // onChange={(event) => {
            //   setName(event.target.value);
            // }}
            ref={nameInputRef}
          />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input
            type="text"
            id="live"
            // value={live}
            // onChange={(event) => {
            //   setLive(event.target.value);
            // }}
            ref={liveInputRef}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            // value={email}
            // onChange={(event) => {
            //   setEmail(event.target.value);
            // }}
            ref={emailInputRef}
          />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;
