import React from 'react'
import anime from 'animejs'
import { Waypoint } from 'react-waypoint'

import { Link, Header, Desc } from './project.components'
import '../../App.css'

const Project = ({ project }) => {
  const [isAnimatin, setAnimating] = React.useState(true)
  const borderAnimation = () => {
    setAnimating(false)
    var tl = anime.timeline({
      easing: 'easeInQuad',
      duration: 1500,
      delay: 500,
    })
    tl.add({
      targets: `.border_style_${project.id} span:nth-child(1)`,
      width: [0, '100%'],
      duration: 750,
    }).add({
      targets: `.border_style_${project.id} span:nth-child(3)`,
      height: [0, '100%'],
      duration: 750,
    })
    var tl1 = anime.timeline({
      easing: 'easeInQuad',
      duration: 1500,
      delay: 500,
    })
    tl1
      .add({
        targets: `.border_style_${project.id} span:nth-child(2)`,
        height: [0, '100%'],
        duration: 750,
      })
      .add({
        targets: `.border_style_${project.id} span:nth-child(4)`,
        width: [0, '100%'],
        duration: 750,
      })
  }

  return (
    <>
      <div className='left_wrapper'>
        {isAnimatin ? <Waypoint onLeave={borderAnimation} /> : ''}

        <Link>
          {project.info}

          <Desc>{project.desc}</Desc>
        </Link>

        <div
          id='border_animation'
          className={`border_style border_style_${project.id}`}
        >
          <span className='styled_span' style={{ width: '100%' }}></span>
          <span className='styled_span' style={{ height: '100%' }}></span>
          <span className='styled_span' style={{ height: '100%' }}></span>
          <span className='styled_span' style={{ width: '100%' }}></span>
        </div>
        <div className='project_details'>
          <div className='project_header'>
            <Header href={project.link}>{project.title}</Header>
          </div>
        </div>
      </div>
      <div className='right_wrapper'>
        <div className='image_details'>
          <img src={project.image} className='project_image' alt='log' />
        </div>
      </div>
    </>
  )
}

export default Project
