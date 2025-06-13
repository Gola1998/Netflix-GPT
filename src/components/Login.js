import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute p-12 bg-black/80 w-3/12 my-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        {/* Render "Full Name" input field only when the user is on the Sign-Up form (not Sign-In) */}
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-2 m-2" />
        )}
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className=" p-4 m-4 text-white bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registerd? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
