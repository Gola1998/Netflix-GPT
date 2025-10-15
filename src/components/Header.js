import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Optionally navigate after sign out
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, []);

  return (
    <div className="bg-gradient-to-b w-screen from-black absolute z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="netflix-logo" />
      {user && (
        <div>
          <button onClick={handleSignOut} className="m-4 text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
