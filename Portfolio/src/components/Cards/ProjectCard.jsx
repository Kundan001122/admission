import React from 'react'
import {Card,Image,Tags,Tag,Details,Title,Date,Description} from './ProjectCardStyle'

const ProjectCard = ({project,setOpenModal}) => {
  return (
    <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {/* <Button>View Project</Button> */}
        </Card>
  )
}

export default ProjectCard
