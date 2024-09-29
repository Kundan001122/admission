import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import { Bio } from '../../data/constants'
import Typewriter from 'typewriter-effect';
import pic from '../../Images/pic.png'
import HeroBgAnimation from '../HeroBgAnimation'
const Hero = () => {
  return (
    <div id='about'>
     <HeroContainer>
      <HeroBg>
        <HeroBgAnimation/>
      </HeroBg>
      <HeroInnerContainer >
      <HeroLeftContainer>
        <Title>Hi, I am <br />{Bio.name}</Title>
        <TextLoop>
          I am a 
          <Span>
            <Typewriter
            options={{
              strings: Bio.roles,
              autoStart:true,
              loop:true,
            }}/>
          </Span>
        </TextLoop>
        <SubTitle>
          {Bio.description} <br /> <br />
          <ResumeButton href={Bio.resume} target='_blank'>
            Download Resume
            </ResumeButton>
        </SubTitle>
      </HeroLeftContainer>
      <HeroRightContainer>
        <Img src={pic} alt="pic" />
      </HeroRightContainer>
      </HeroInnerContainer>
     </HeroContainer>
    </div>
  )
}

export default Hero
