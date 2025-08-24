import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4 ">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-primary mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
