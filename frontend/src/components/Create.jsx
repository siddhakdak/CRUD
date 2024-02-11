import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const adduser = {name, email,age};

    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(adduser),
      headers:{
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(response.ok){
      console.log(result);
      setError("");
      navigate("/all");
    }
  }
  return (
    <>
      <div className="constiner my-2">
        {error && <div class="alert alert-danger">
  {error}
</div>}
        <h2 className="text-center">Enter the Details</h2>
        <form onSubmit={handleSubmit} className="mx-5 ">
          <div className="form-group mb-3">
            <label for="exampleInputName">name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Age</label>
            <input
              type="Number"
              className="form-control"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
