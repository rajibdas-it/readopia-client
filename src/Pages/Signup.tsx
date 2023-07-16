import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
              <button className="btn btn-ghost btn-outline">
                <FcGoogle /> Signup with Google
              </button>
            </div>
            <label className="text-xs">
              Already have an account?
              <Link to="/login" className="label-text-alt link link-hover">
                Login
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
