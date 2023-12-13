import React from "react";
import {deleteOne} from "../FrontendAPI";

export function renderDeletePostPage(Posts, setPosts) {
  return (
    <div>
      <div id="PostDeleter">{postDeleter(Posts, setPosts)}</div>
    </div>
  );
}

const DeleteFromDB = (Posts, setPosts) => {
  deleteOne(document.getElementById("idbox").value, Posts, setPosts);
};

function postDeleter(Posts, setPosts) {
  return (
    <div
      style={{
        position: "absolute",
        width: "60%",
        height: "25%",
        border: "solid",
        marginLeft: "10%",
      }}
    >
      {/* Row 0 */}
      <br></br>
      <div class="w-72" style={{ width: "90%", marginLeft: "5%" }}>
        <div class="relative h-10 w-full min-w-[200px] ">
          <input
            type="text"
            placeholder="ID (e.g. 0)"
            id="idbox"
            class="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5  hidden h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
      </div>
      {/* Row 1 */}
      <div class="w-96 mt-10 bg-gray-400" style={{ width: "90%", marginLeft: "5%" }}>
        <div class="relative w-full min-w-[200px]">
          <button
            id="DeleteButton"
            onClick={() => DeleteFromDB(Posts, setPosts)}
            class="peer h-full min-h-[64px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}