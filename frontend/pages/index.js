import { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setDisplay(search);
  };

  return (
    <div className="container">
      <Head>
        <title>DevsFor</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <div className="grid">
          <div className='title'><code>DevsFor</code><code style={{ color: '#ff66ff' }}>_</code></div>
          
          {/* <form className="title" onSubmit={handleSubmit}>
            <input
              type="text" 
              value={search}
              placeholder="_"
              onChange={handleChange}></input>
          </form> */}
        </div>
        <div className="card">Summer 2020</div>
      </main>

      <footer>
        <div>Designed and Built by DevsFor in NYC | &copy; 2020</div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        footer {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 4rem;
          font-size: 0.85rem;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        footer a {
          text-decoration: none;
          font-size: inherit;
          color: #696969;
          transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }

        footer a:hover {
          color: #26C6DA ;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        code {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 0.4rem;
        }

        form {
          margin: 2rem;
        }

        input {
          border: none;
          width: 10rem;
          font-size: 4rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        input:focus {
          outline: none;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home;