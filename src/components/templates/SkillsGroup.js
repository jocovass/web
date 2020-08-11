import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileCode, faCog } from '@fortawesome/free-solid-svg-icons'
import { TertiaryTitle, Highlight } from '../elements/elements'
import SkillsList from './SkillsList'

const SkillGroupStyle = styled.div`
  padding: 3rem 1rem;
  background-color: var(--clr-secondary-light);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  margin-bottom: 3rem;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
`

function SkillsGroup({ category }) {
  const skill = skillsTable[category]
  let icon = null
  if (skill.icon === 'Code') {
    icon = faCode
  } else if (skill.icon === 'FileCode') {
    icon = faFileCode
  } else if (skill.icon === 'Cog') {
    icon = faCog
  }
  return (
    <SkillGroupStyle>
      <TertiaryTitle>
        <Highlight>
          <Icon icon={icon} />
        </Highlight>
        {'  '}
        {category}
      </TertiaryTitle>
      <SkillsList list={skill.list} />
    </SkillGroupStyle>
  )
}

SkillsGroup.propTypes = {
  category: PropTypes.string,
}

const skillsTable = {
  languages: {
    icon: 'Code',
    list: ['HTML5', 'CSS3', 'JavaScript', 'GraphQL'],
  },
  libraries: {
    icon: 'FileCode',
    list: [
      'Bootstrap',
      'SCSS',
      'ReactJs',
      'GatsbyJS',
      'Styled Components',
      'Redux',
    ],
  },
  tools: {
    icon: 'Cog',
    list: ['Git', 'GitHub', 'WebPack', 'FireBase', 'AdobeXD', 'VSCode'],
  },
}

export default SkillsGroup
