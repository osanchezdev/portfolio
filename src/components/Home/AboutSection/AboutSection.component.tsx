import React from "react"
import Button from "../../global/Button/Button.component"
import { BTN_PRIMARY, BTN_SECONDARY, BTN_TERTIARY } from "../../../constants"
import {
  AboutSectionWrapper,
  AboutTextWrapper,
  AboutTitle,
  AboutSubTitle,
  AboutDescription,
  AboutActions,
  AboutImageWrapper,
} from "./AboutSection.styles"
import Image from "../../image"

const AboutSection: React.FC = () => {
  return (
    <AboutSectionWrapper>
      <AboutTextWrapper>
        <AboutTitle>Oscar Sánchez</AboutTitle>
        <AboutSubTitle>Full Stack Web / Mobile Developer</AboutSubTitle>
        <AboutDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          repudiandae atque molestiae obcaecati cumque sequi dignissimos
          quibusdam maiores enim velit illo hic placeat, libero, voluptas quos
          tempora dolorum nulla rerum!
        </AboutDescription>
        <AboutActions>
          <Button variant={BTN_PRIMARY}>Primary</Button>
          <Button variant={BTN_SECONDARY}>Secondary</Button>
          <Button variant={BTN_TERTIARY}>Tertiary</Button>
        </AboutActions>
      </AboutTextWrapper>
      <AboutImageWrapper>
        <Image />
      </AboutImageWrapper>
    </AboutSectionWrapper>
  )
}

export default AboutSection
