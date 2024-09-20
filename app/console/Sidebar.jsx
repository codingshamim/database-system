export default function Sidebar() {
  return (
    <div
      className="hs-overlay h-[91vh] [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden top-0 start-0 bottom-0 z-[60] w-64 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar"
    >
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open=""
      >
        {/* Tree Root */}
        <div
          className="hs-accordion-treeview-root"
          role="tree"
          aria-orientation="vertical"
        >
          {/* 1st Level Accordion Group */}
          <div
            className="hs-accordion-group"
            role="group"
            data-hs-accordion-always-open=""
          >
            {/* 1st Level Accordion */}
            <div
              className="hs-accordion active"
              role="treeitem"
              aria-expanded="true"
              id="hs-basic-tree-heading-one"
            >
              {/* 1st Level Accordion Heading */}
              <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                <button
                  className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  aria-expanded="true"
                  aria-controls="hs-basic-tree-collapse-one"
                >
                  <svg
                    className="size-4 text-gray-black"
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
                <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                  <div className="flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1371 6.91018C13.4184 6.7695 13.7123 6.59981 14 6.40001V8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8V6.40001C2.28772 6.59981 2.58158 6.7695 2.86293 6.91018C4.28096 7.61919 6.09998 8 8 8C9.90002 8 11.719 7.61919 13.1371 6.91018Z"
                        fill="#000000"
                      />
                      <path
                        d="M2 11.4V13C2 14.6569 4.68629 16 8 16C11.3137 16 14 14.6569 14 13V11.4C13.7123 11.5998 13.4184 11.7695 13.1371 11.9102C11.719 12.6192 9.90002 13 8 13C6.09998 13 4.28096 12.6192 2.86293 11.9102C2.58158 11.7695 2.28772 11.5998 2 11.4Z"
                        fill="#000000"
                      />
                      <path
                        d="M8 0C11.3137 0 14 1.34315 14 3C14 4.65685 11.3137 6 8 6C4.68629 6 2 4.65685 2 3C2 1.34315 4.68629 0 8 0Z"
                        fill="#000000"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Chat App
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End 1st Level Accordion Heading */}
              {/* 1st Level Collapse */}
              <div
                id="hs-basic-tree-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                role="group"
                aria-labelledby="hs-basic-tree-heading-one"
              >
                {/* 2nd Level Accordion Group */}
                <div
                  className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                  role="group"
                  data-hs-accordion-always-open=""
                >
                  {/* 2nd Level Nested Accordion */}
                  <div
                    className="hs-accordion active"
                    role="treeitem"
                    aria-expanded="true"
                    id="hs-basic-tree-sub-heading-one"
                  >
                    {/* 2nd Level Accordion Heading */}
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                      <button
                        className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        aria-expanded="true"
                        aria-controls="hs-basic-tree-sub-collapse-one"
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
                      <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                        <div className="flex items-center gap-x-3">
                          <svg
                            viewBox="0 0 16 16"
                            className="shrink-0 size-4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 1H6L9 4H16V14H0V1Z" fill="#000000" />
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800 dark:text-neutral-200">
                              Messages
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Accordion Heading */}
                  </div>
                  {/* End 2nd Level Nested Accordion */}
                </div>
                {/* 2nd Level Accordion Group */}
              </div>
              {/* End 1st Level Collapse */}
              {/* 1st Level Collapse */}
              <div
                id="hs-basic-tree-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                role="group"
                aria-labelledby="hs-basic-tree-heading-one"
              >
                {/* 2nd Level Accordion Group */}
                <div
                  className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                  role="group"
                  data-hs-accordion-always-open=""
                >
                  {/* 2nd Level Nested Accordion */}
                  <div
                    className="hs-accordion active"
                    role="treeitem"
                    aria-expanded="true"
                    id="hs-basic-tree-sub-heading-one"
                  >
                    {/* 2nd Level Accordion Heading */}
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                      <button
                        className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        aria-expanded="true"
                        aria-controls="hs-basic-tree-sub-collapse-one"
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
                      <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                        <div className="flex items-center gap-x-3">
                          <svg
                            viewBox="0 0 16 16"
                            className="shrink-0 size-4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 1H6L9 4H16V14H0V1Z" fill="#000000" />
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800 dark:text-neutral-200">
                              Users
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Accordion Heading */}
                  </div>
                  {/* End 2nd Level Nested Accordion */}
                </div>
                {/* 2nd Level Accordion Group */}
              </div>
              {/* End 1st Level Collapse */}
            </div>
            {/* End 1st Level Accordion */}
            {/* 1st Level Accordion */}
            <div
              className="hs-accordion"
              role="treeitem"
              aria-expanded="false"
              id="hs-basic-tree-heading-two"
            >
              {/* 1st Level Collapse */}
              <div
                id="hs-basic-tree-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="group"
                aria-labelledby="hs-basic-tree-heading-two"
              >
                <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                  {/* 1st Level Item */}
                  <div
                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer"
                    role="treeitem"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">
                          preline.js
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End 1st Level Item */}
                  {/* 1st Level Item */}
                  <div
                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer"
                    role="treeitem"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">
                          tailwind.js
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End 1st Level Item */}
                  {/* 1st Level Item */}
                  <div
                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer"
                    role="treeitem"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">
                          www.js
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End 1st Level Item */}
                </div>
              </div>
              {/* End 1st Level Collapse */}
            </div>
            {/* End 1st Level Accordion */}
          </div>
          {/* End 1st Level Accordion Group */}
          {/* 1st Level Accordion Group */}
          <div
            className="hs-accordion-group"
            role="group"
            data-hs-accordion-always-open=""
          >
            {/* 1st Level Accordion */}
            <div
              className="hs-accordion active"
              role="treeitem"
              aria-expanded="true"
              id="hs-basic-tree-heading-one"
            >
              {/* 1st Level Accordion Heading */}
              <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                <button
                  className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  aria-expanded="true"
                  aria-controls="hs-basic-tree-collapse-one"
                >
                  <svg
                    className="size-4 text-gray-black"
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
                <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                  <div className="flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1371 6.91018C13.4184 6.7695 13.7123 6.59981 14 6.40001V8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8V6.40001C2.28772 6.59981 2.58158 6.7695 2.86293 6.91018C4.28096 7.61919 6.09998 8 8 8C9.90002 8 11.719 7.61919 13.1371 6.91018Z"
                        fill="#000000"
                      />
                      <path
                        d="M2 11.4V13C2 14.6569 4.68629 16 8 16C11.3137 16 14 14.6569 14 13V11.4C13.7123 11.5998 13.4184 11.7695 13.1371 11.9102C11.719 12.6192 9.90002 13 8 13C6.09998 13 4.28096 12.6192 2.86293 11.9102C2.58158 11.7695 2.28772 11.5998 2 11.4Z"
                        fill="#000000"
                      />
                      <path
                        d="M8 0C11.3137 0 14 1.34315 14 3C14 4.65685 11.3137 6 8 6C4.68629 6 2 4.65685 2 3C2 1.34315 4.68629 0 8 0Z"
                        fill="#000000"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        E-Commerce
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End 1st Level Accordion Heading */}
              {/* 1st Level Collapse */}
              <div
                id="hs-basic-tree-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                role="group"
                aria-labelledby="hs-basic-tree-heading-one"
              >
                {/* 2nd Level Accordion Group */}
                <div
                  className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                  role="group"
                  data-hs-accordion-always-open=""
                >
                  {/* 2nd Level Nested Accordion */}
                  <div
                    className="hs-accordion active"
                    role="treeitem"
                    aria-expanded="true"
                    id="hs-basic-tree-sub-heading-one"
                  >
                    {/* 2nd Level Accordion Heading */}
                    <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                      <button
                        className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        aria-expanded="true"
                        aria-controls="hs-basic-tree-sub-collapse-one"
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
                      <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                        <div className="flex items-center gap-x-3">
                          <svg
                            viewBox="0 0 16 16"
                            className="shrink-0 size-4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 1H6L9 4H16V14H0V1Z" fill="#000000" />
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800 dark:text-neutral-200">
                              Users
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Accordion Heading */}
                  </div>
                  {/* End 2nd Level Nested Accordion */}
                </div>
                {/* 2nd Level Accordion Group */}
              </div>
              {/* End 1st Level Collapse */}
            </div>
            {/* End 1st Level Accordion */}
            {/* 1st Level Accordion */}
            <div
              className="hs-accordion"
              role="treeitem"
              aria-expanded="false"
              id="hs-basic-tree-heading-two"
            >
              {/* 1st Level Collapse */}
              <div
                id="hs-basic-tree-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="group"
                aria-labelledby="hs-basic-tree-heading-two"
              >
                <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                  {/* 1st Level Item */}
                  <div
                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer"
                    role="treeitem"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">
                          preline.js
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End 1st Level Item */}
                  {/* 1st Level Item */}
                  <div
                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer"
                    role="treeitem"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">
                          tailwind.js
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End 1st Level Item */}
                  {/* 1st Level Item */}
                  <div
                    className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-2 rounded-md cursor-pointer"
                    role="treeitem"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="grow">
                        <span className="text-sm text-gray-800 dark:text-neutral-200">
                          www.js
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End 1st Level Item */}
                </div>
              </div>
              {/* End 1st Level Collapse */}
            </div>
            {/* End 1st Level Accordion */}
          </div>
          {/* End 1st Level Accordion Group */}
        </div>
        {/* End Tree Root */}
      </nav>
    </div>
  );
}
