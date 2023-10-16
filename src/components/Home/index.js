// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="image-small"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="image-large"
      />
    </div>
  </>
)

export default Home
