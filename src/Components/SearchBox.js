import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => <div className="pa2">
  <input
    aria-label="Search Robots"
    className="pa3 ba b--green bg-lightest-blue"
    type="text"
    placeholder="search for a robot"
    onChange={searchChange}
  />
</div>

export default SearchBox