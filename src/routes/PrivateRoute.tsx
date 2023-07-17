import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/app/hook";
import Loader from "../Components/ui/Loader";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <Loader />;
  }
  if (user.email && !isLoading) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
