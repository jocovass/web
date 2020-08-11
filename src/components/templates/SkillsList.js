import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListStyle = styled.ul`
  li {
    list-style-type: none;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`

function SkillsList({ list }) {
  return (
    <ListStyle>
      {list.map(item => {
        return <li key={item}>{item}</li>
      })}
    </ListStyle>
  )
}

SkillsList.propTypes = {
  list: PropTypes.array,
}

export default SkillsList
