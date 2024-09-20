export default function LoadingButton({ loading, children }) {
  return (
    <button
      type="submit"
      className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent ${
        loading
          ? "bg-[#3dccc7]"
          : "bg-primary active:scale-[95%] hover:bg-[#3dccc7]"
      } text-white  focus:outline-none disabled:opacity-50 disabled:pointer-events-none transition-all duration-150`}
    >
      {loading && (
        <span
          className="animate-spin inline-block size-4 border-[1px] border-current border-t-transparent text-white rounded-full"
          role="status"
          aria-label="loading"
        ></span>
      )}
      {loading ? "Loading..." : children}
    </button>
  );
}
