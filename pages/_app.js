import '../styles/globals.css'
import Navbar from '../comps/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
