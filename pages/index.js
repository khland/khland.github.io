import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loading from '../comps/Loading'
import Home from '../comps/Home'

const LandingPage = dynamic(() => { return import('../comps/Home')  }, { ssr: false, loading: () => <Loading/> })

export default () => {
  return (
    <Home/>
  )
}
