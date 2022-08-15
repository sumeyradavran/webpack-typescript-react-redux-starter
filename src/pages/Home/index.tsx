import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to='/page'>page</Link>
      </div>
    </>
  )
}

export default Home
