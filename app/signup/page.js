import SignUpform from "./SignUpform";

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[40%] mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?
              <a
                className="text-primary decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                href="../examples/html/signin.html"
              >
                Sign in here
              </a>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <SignUpform />
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
}
