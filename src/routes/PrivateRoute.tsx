import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/app/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (user.email && !isLoading) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
