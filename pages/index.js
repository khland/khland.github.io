import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-center" style={{ backgroundColor: '#008D88', color: '#28586a', paddingTop: '20%', height: '100vh'}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        <title>IT KOH</title>
      </Head>

      <main role="main" class="inner cover">
        <h1 className="cover-heading">IT KOH</h1>
        <h5>Welcome to IT KOH</h5>
        <p>
        </p><p className="caption">OUR PAGE IS UNDER CONSTRUCTION</p>
        <p className="caption">PLEASE COME BACK SOON.</p>
        <p className="lead">
          <a target="_blank" href="https://github.com/it-koh" class="btn btn-lg btn-dark" style={{ color: '#008D88'}}>Learn more</a>
        </p>
      </main>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </div>
  )
}
