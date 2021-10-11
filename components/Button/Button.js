const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {` 
          button {
            display: flex;
            align-items: center;
            border: 0;
            background-color: black;
            color: white;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 8px 10px;
            transition: opacity 0.3s ease;
          }
          button > :global(svg) {
            margin-right: 10px;
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  );
};

export default Button;
