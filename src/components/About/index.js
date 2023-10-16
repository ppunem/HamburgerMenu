// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="image-small"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="image-large"
      />
    </div>
  </>
)

export default About
