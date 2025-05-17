import React from "react";
import { useDispatch } from "react-redux";

export default function InputTexte({ stateInput }) {

  const dispatch = useDispatch()

  return (
    <>
      <input
        value={stateInput}
        type="text"
        className="input input-xl input-primary w-full focus:outline-none cursor-default"
        readOnly
      />
    </>
  );
}
