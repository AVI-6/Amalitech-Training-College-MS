import React from 'react'

function CategoriesContents() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="categories-content">
      <div className="filter-div">
        <label htmlFor="search">Search </label>
        <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search students..." />
      </div>
      <div className="sort-div">
        <label htmlFor="sort">Students </label>
        <select id="sort" name="sort">
          <option value="All Students">All Students</option>
          <option value="name">Name</option>
          <option value="enrollment">Enrollment Number</option>
          <option value="course">Course</option>
          <option value="status">Status</option>
        </select>
      </div>
      <div className="status-div">
        <label htmlFor="status">Status </label>
        <select id="status" name="status">
          <option value="all">Status: All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  )
}

export default CategoriesContents
