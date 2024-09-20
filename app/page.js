import Link from "next/link";

<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    {/* Title */}
    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
        Mastering Data Retrieval
      </h1>
    </div>
    {/* End Title */}
    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600">
        Welcome to RksDB: Your all-in-one solution for efficient data management
        and analytics. We offer intuitive tools for secure data storage, easy
        retrieval, and insightful visualization, empowering you to make
        data-driven decisions with confidence. Unlock the potential of your data
        today!
      </p>
    </div>
    {/* Buttons */}
    <div className="mt-8 gap-3 flex flex-col md:flex-row justify-center">
      <button className="btn">Get started</button>
      <button
        type="button"
        className="var-btn bg-black flex justify-center items-center gap-4"
      >
        $ npm i preline
        <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
          <svg
            className="shrink-0 size-4 group-hover:rotate-6 transition"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          </svg>
        </span>
      </button>
    </div>
    {/* End Buttons */}
  </div>
</div>;

export default function Home() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            Mastering Data Retrieval
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600">
            Welcome to RksDB: Your all-in-one solution for efficient data
            management and analytics. We offer intuitive tools for secure data
            storage, easy retrieval, and insightful visualization, empowering
            you to make data-driven decisions with confidence. Unlock the
            potential of your data today!
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 gap-3 flex flex-col md:flex-row justify-center">
          <Link href="/signup" className="btn">
            Get started
          </Link>
          <button
            type="button"
            className="var-btn bg-black flex justify-center items-center gap-4"
          >
            $ npm i preline
            <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
              <svg
                className="shrink-0 size-4 group-hover:rotate-6 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
            </span>
          </button>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
}
