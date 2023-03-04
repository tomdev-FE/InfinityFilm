import React, { FunctionComponent } from "react";

type Props = {
  type: string;
  handleType: () => void;
};
const SegmentedControl: FunctionComponent<Props> = ({ type, handleType }) => {
  return (
    <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-md inline-flex mt-4 w-fit	 md:mt-0">
      <button
        className={
          type === "list"
            ? "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-md px-4 py-2 bg-white rounded-md text-blue-40"
            : "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 px-4 py-2 "
        }
        id="list"
        onClick={handleType}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-current w-4 h-4 mr-2"
        >
          <line x1={8} y1={6} x2={21} y2={6} />
          <line x1={8} y1={12} x2={21} y2={12} />
          <line x1={8} y1={18} x2={21} y2={18} />
          <line x1={3} y1={6} x2="3.01" y2={6} />
          <line x1={3} y1={12} x2="3.01" y2={12} />
          <line x1={3} y1={18} x2="3.01" y2={18} />
        </svg>
        <span>List</span>
      </button>
      <button
        className={
          type === "grid"
            ? "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-md px-4 py-2 bg-white rounded-md text-blue-40"
            : "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 px-4 py-2 "
        }
        id="grid"
        onClick={handleType}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-current w-4 h-4 mr-2"
        >
          <rect x={3} y={3} width={7} height={7} />
          <rect x={14} y={3} width={7} height={7} />
          <rect x={14} y={14} width={7} height={7} />
          <rect x={3} y={14} width={7} height={7} />
        </svg>
        <span>Grid</span>
      </button>
    </div>
  );
};

export default SegmentedControl;
