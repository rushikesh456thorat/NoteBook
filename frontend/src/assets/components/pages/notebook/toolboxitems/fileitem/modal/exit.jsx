import { useNavigate } from "react-router-dom";

const Exit = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "/" route
    navigate("/");
  };

  return (
    <button className="btn btn-sm min-w-max rounded-md btn-ghost font-semibold" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <span> Exit </span>
    </button>
  );
};

export default Exit;
