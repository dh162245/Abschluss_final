const SearchField = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="text" placeholder="type something" />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchField;