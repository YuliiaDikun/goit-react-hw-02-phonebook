export const InputSearch = ({ onChange }) => {
  return (
    <>
      <p>Enter your search value</p>
      <input type="text" onChange={onChange} />
    </>
  );
};
