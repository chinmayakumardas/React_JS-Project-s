import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
const Item = (props) => {
  const [done, setDone] = useState(false);

  return (
    <div
      onClick={() => {
        setDone(!done);
      }}
      className={` select-none w-full border-b p-3 flex justify-between items-center`}
    >
      <div className="">
        <span className={`${done === true ? "line-through" : ""}`}>{props.item}</span>
        <span className="pl-3 text-[14px] text-slate-400">{props.time}</span>
      </div>
      <div onclick={()=>{props.removeHandler(props.id)}}>
        <BsTrash className="text-[red]" />
      </div>
    </div>
  );
};

export default Item;
