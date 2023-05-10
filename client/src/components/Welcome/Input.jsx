import PropTypes from "prop-types";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      type={type}
      step="0.0001"
      name={name}
      placeholder={placeholder}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      value={value}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
