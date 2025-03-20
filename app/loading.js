export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        type="button"
        className="bg-indigo-500 text-white px-8 py-4 flex items-center justify-center text-2xl font-medium rounded-xl w-fit h-fit"
        disabled
      >
        <svg
          className="animate-spin h-12 w-12 mr-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Loading"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
          ></path>
        </svg>
        Loading...
      </button>
    </div>
  );
}
