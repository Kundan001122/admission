import React from 'react'
import { Container, Wrapper, Title, Description,TimelineSection } from './ExperianceStyle'
import { experiences } from '../../data/constants'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperianceCard from '../Cards/ExperianceCard';

const Experiance = () => {
  return (
    <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Description>
                    My work experiance
                </Description>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index)=>(
                            <TimelineItem>

                                <TimelineSeparator>
                                      <TimelineDot variant='outlined' color='secondary'/>
                                      {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}

                                      
                                </TimelineSeparator>
                                <TimelineContent sx={{py:'12px' , px:2}}>
                                  <ExperianceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
                
            </Wrapper>
        </Container>
  )
}

export default Experiance
