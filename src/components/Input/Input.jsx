import "./Input.css";

export default function Input({ type, value, placeholder, onChange }) {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
