import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loading from '../comps/Loading'

const LandingPage = dynamic(() => { return import('../comps/Home')  }, { ssr: false, loading: () => <Loading/> })

export default function Home() {
  return (
    <LandingPage/>
  )
}
