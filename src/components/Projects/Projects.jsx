import React from 'react'
import Project from '../Project/Project'
import { projects } from '../Project/data.project'

import { Wrapper } from './projects.components'

const Projects = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Wrapper id='works' key={project.id}>
            <Project project={project} />
          </Wrapper>
        )
      })}
    </>
  )
}

export default Projects
