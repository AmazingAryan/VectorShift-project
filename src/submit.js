// submit.js

export const SubmitButton = () => {
    return (
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
        >
          Submit
        </button>
      </div>
    );
  }
  