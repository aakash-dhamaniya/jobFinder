import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.job.auth);
  console.log(auth);
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
}
