import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <div className="divider">OR</div>
              <button className="btn btn-ghost btn-outline">
                <FcGoogle /> Sign In Google
              </button>
            </div>
            <label className="text-xs">
              create an account?
              <Link to="/signup" className="label-text-alt link link-hover">
                Signup
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
