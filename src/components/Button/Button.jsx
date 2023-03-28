import "./Button.css";

export default function Button({ children, type, onClick }) {
  return (
    <button type={type} onClick={onClick} className="default-btn">
      {children}
    </button>
  );
}
