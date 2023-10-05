import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
export default function PreventGoBack({ children }) {
  const auth = useSelector((state) => state.job.auth);

  if (auth) {
    return <Navigate to="/landingPage" />;
  }
  return children;
}
