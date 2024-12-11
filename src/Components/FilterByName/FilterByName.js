import React from 'react'
import { Form } from 'react-bootstrap'

const FilterByName = ({inputSearch,setinputSEarch}) => {
  return (
    <div>
        <Form.Control
            
            type="text"
            placeholder="entrer film" className="filter-name"
            style={{width: '850px'}}
            onChange={(e)=> setinputSEarch(e.target.value)}
            value={inputSearch}
          />

    </div>
  )
}

export default FilterByName