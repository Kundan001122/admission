import React from 'react'
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcon, SocialMediaIcons,Copyright } from './FooterStyle'
import { Bio } from "../../data/constants"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Kundan Kumar</Logo>
                <Nav>
                    <NavLink href='#about'>About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
          &copy; 2024 Kundan Kumar. All rights reserved.
        </Copyright>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
