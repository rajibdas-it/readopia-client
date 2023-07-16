import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/app/hook";
import { loginUser, loginWithGoogle } from "../Redux/features/user/userSlice";

export default function Login() {
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email: newUserEmail, password: newUserPassword }));
  };

  const handleSignInWithGoogle = () => {
    dispatch(loginWithGoogle());
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
      //
    }
  }, []);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <div className="divider">OR</div>
              <button
                className="btn btn-ghost btn-outline"
                onClick={handleSignInWithGoogle}
              >
                <FcGoogle /> Sign In Google
              </button>
            </div>
            <label className="text-xs">
              create an account?
              <Link to="/signup" className="label-text-alt link link-hover">
                Signup
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
