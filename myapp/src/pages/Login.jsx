import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logUsers } from "../redux/actions/action";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.userList);

  useEffect(()=>{
    if(isAuth){
     navigate('/')
    } 
   },[dispatch,isAuth,navigate])

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      dispatch(logUsers(user));
      setUser({ name: "", email: "", password: "" });
    } else {
      Swal.fire("failed!", "all form field is required");
    }
  };

 
  return (
    <div>
      <div className="form-wrap">
        <form className="w-25 mx-auto shadow p-4 mt-5">
          <h4 className="text-center mb-4">Login</h4>

          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={inputHandler}
            />
          </div>
          <p>
            Don't have an Account? <Link to="/signup">Sign Up</Link>
          </p>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
