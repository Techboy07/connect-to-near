// eslint-disable-next-line react/prop-types
function Button({ login, handleClick }) {
  return (
    <button className="login-btn" onClick={handleClick}>
      {login ? "Login" : "Signup"}
    </button>
  );
}

export default Button;
