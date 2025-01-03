export function Spinner() {
  return (
    <svg
      viewBox="0 0 66 66"
      width={65}
      height={65}
      className="spinner"
      aria-hidden
    >
      <circle
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
        className="path"
      />
    </svg>
  );
}
