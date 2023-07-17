import Main from "./Layout/Main";
import { useEffect } from "react";
import { auth } from "./firebase/firebase.config";
import { useAppDispatch } from "./Redux/app/hook";
import { onAuthStateChanged } from "firebase/auth";
import { setIsLoading, setUser } from "./Redux/features/user/userSlice";

function App() {
  // const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email!));
        dispatch(setIsLoading(false));
      }
    });
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
