import React from 'react'
import { skills } from '../../data/constants'
import { Container , Wrapper, Title, Description ,SkillsContainer,Skill,SkillTitle,SkillList,SkillImage,SkillItem} from './SkillsStyle'

const Skills = () => {
  return (
    <Container id="skills">
    <Wrapper>
      <Title>Skills</Title>
      <Description>Here are some of my skills on which I have been working on for the past 1 years.
      </Description>
      <SkillsContainer>
        {skills.map((skill) => (
          <Skill>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map((item) => (
                <SkillItem>
                  <SkillImage src={item.image}/>
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}

      </SkillsContainer>
    </Wrapper>
  </Container>
  )
}

export default Skills
