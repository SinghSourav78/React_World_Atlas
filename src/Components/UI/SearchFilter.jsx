export const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
  }) => {
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  
    const sortCountries = (value) => {
        //[...countries] yehn pr countries ka copy lenge direct countries nae lenge,react mein ek chiz yaad rakhna kabhi bhi direct jo humara state variable h usko humko kavii bhi disturb nae krna h data humme muted nae krna h that's why mein eska duplicate bana raha hu [...countries]

        // localeCompare() method React ka nahi, JavaScript ka built-in method hai, jo strings ka comparison karta hai — dictionary order (alphabetical) ke according, aur optionally language (locale) ke rules ke base par bhi.
      const sortCountry = [...countries].sort((a, b) => {
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortCountry);
    };
  
    return (
      <section className="section-searchFilter container">
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
          />
        </div>
  
        <div>
          <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>
  
        <div>
          <button onClick={() => sortCountries("des")}>Desc</button>
        </div>
  
        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
  };