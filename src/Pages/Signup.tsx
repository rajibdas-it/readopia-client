import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../Redux/app/hook";
import { createUser, loginWithGoogle } from "../Redux/features/user/userSlice";

export default function Signup() {
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createUser({ email: newUserEmail, password: newUserPassword }));
  };

  const handleSignUpWithGoogle = () => {
    dispatch(loginWithGoogle());
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={newUserEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewUserEmail(e.target.value)
                }
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                value={newUserPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewUserPassword(e.target.value)
                }
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <div className="divider">OR</div>
              <button
                className="btn btn-ghost btn-outline"
                onClick={handleSignUpWithGoogle}
              >
                <FcGoogle /> Signup with Google
              </button>
            </div>
            <label className="text-xs">
              Already have an account?
              <Link to="/login" className="label-text-alt link link-hover">
                Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
