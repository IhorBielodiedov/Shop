import Form from "./Form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        localStorage.setItem("id", user.uid);
        localStorage.setItem("email", user.email);
        push("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return <Form handleClick={handleLogin} />;
};

export default LoginForm;
