import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ToggleButton = ({ activate, setActivate, setDesactivate }: any) => {
  const navigate = useNavigate();
  const { accountId } = useParams();
  return (
    <label
      htmlFor="default-toggle"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        checked={activate}
        onChange={() => {
          if (activate) {
            setDesactivate(true);
            return;
          }
          navigate(`/viewAccount/seasonalConveniencePlan/${accountId}`);
          setActivate(!activate);
        }}
        id="default-toggle"
        className="sr-only peer"
      />
      <div
        className="
       w-11 h-6 bg-gray-200 
       peer-focus:outline-none peer-focus:ring-4
       peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full 
       peer dark:bg-gray-700 peer-checked:after:translate-x-full
       peer-checked:after:border-white 
       after:content-[''] 
       after:absolute
       after:top-[5px]
       after:left-[5px]
       after:bg-white
       after:border-gray-300
       after:border 
       after:rounded-full after:h-5 after:w-5 after:transition-all
       dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
    </label>
  );
};
