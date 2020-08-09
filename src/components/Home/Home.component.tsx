import React from "react"
import Particles from "react-particles-js"
import Image from "../image"
import { Link } from "gatsby"
import AboutSection from "./AboutSection/AboutSection.component"

const Home: React.FC = () => {
  return (
    <>
      <AboutSection />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Particles />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default Home
