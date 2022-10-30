import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [nameInput, setNameInput] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-screen h-screen bg-background text-white flex items-center justify-between">
      <div className="text-center w-full flex flex-col">
        <div className="display-font text-4xl self-center">
          What should we call you?
        </div>
        <input
          className="p-4 border-b-2 bg-transparent focus:outline-none"
          type="text"
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        ></input>
        <div
          className="display-font text-xl p-4 border-2 border-green-600 mt-4 w-1/2 self-center"
          onClick={() => {
            if (nameInput) {
              window.localStorage.setItem("user", nameInput);
              window.location.reload();
            }
          }}
        >
          Done
        </div>
      </div>
    </div>
  );
}
