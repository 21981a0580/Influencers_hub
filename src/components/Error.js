import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="mt-40 p-8 bg-red-100 text-red-700 rounded-md text-center">
      <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="mb-2">{err.status} - {err.statusText || "Unknown Error"}</p>
      {err.data && <pre className="bg-red-200 p-2 rounded">{err.data}</pre>}
    </div>
  );
};

export default Error;
