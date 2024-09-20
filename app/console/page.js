/* eslint-disable react/no-unescaped-entities */
export default function page() {
  return (
    <div className="w-full px-2">
      <div className="databse-container mt-2 w-full">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <ul className="py-4 px-8">
            <li>
              <span className="text-gray-800">rksId : </span>
              <span className="text-[#c52233]">"66e47c3b3d5004920a1659df"</span>
            </li>
            <li>
              <span className="text-gray-800">sender : </span>
              <span className="text-primary">"66e47c3b3d5004920a1659df"</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800">name : </span>
              <span className="text-primary">"Md Shamim Mia"</span>
            </li>
            <li className="flex items-center gap-2">
              <button
                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-expanded="false"
                aria-controls="hs-basic-tree-collapse-two"
              >
                <svg
                  className="size-4 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path
                    className="hs-accordion-active:hidden block"
                    d="M12 5v14"
                  />
                </svg>
              </button>
              <span className="text-gray-800"> favourites : </span>
              <span className="text-primary">Array</span>
            </li>
            <li className="flex gap-2 items-center p-0">
              <button
                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-expanded="false"
                aria-controls="hs-basic-tree-collapse-two"
              >
                <svg
                  className="size-4 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path
                    className="hs-accordion-active:hidden block"
                    d="M12 5v14"
                  />
                </svg>
              </button>
              <span className="text-gray-800">qualifications : </span>
              <span className="text-primary">Object</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
