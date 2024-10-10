'use client'

export const SearchBar = (props) => {
  const {searchValue, setSearchValue} = props
  return (
    <input
      placeholder='Search blog posts...'
      value={searchValue}
      onChange={(e) =>setSearchValue(e.target.value)} />
  )
}
