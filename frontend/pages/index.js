import { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState('_');


  const format = () => {
    let terms = search.replace(/(?:^|\s|["'([{])+\S/g, term => term.toUpperCase());
    return (terms === '') ? '_' : terms.split(' ').join('');
  };

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setDisplay(format());
  };

  return (
    <div className="container">
      <Head>
        <title>DevsFor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <code className="title">> DevsFor<code style={{color: '#ff66ff'}}>{display}</code></code>
        <form className="title" onSubmit={handleSubmit}>
          <input
            type="text" 
            value={search}
            placeholder="Search..."
            onChange={handleChange}></input>
        </form>
        <div></div>
      </main>

      <footer>
        <div>Designed and Built by DevsFor in NYC | &copy; 2020</div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          padding: 2rem 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // justify-content: center;
          width: 100%;
        }

        footer {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 4rem;
          font-size: 0.85rem;
          border-top: 1px solid #eaeaea;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
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

        form {
          display: flex;
          justify-content: center;
          margin: 2rem;
        }

        input {
          border: 1px solid #eaeaea;
          font-size: 3rem;
          border-radius: 0.74rem;
          padding: 1rem;
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

        ::placeholder { 
          color: #eaeaea;
          opacity: 1; 
        }

        :-ms-input-placeholder { 
          color: #eaeaea;
        }

        ::-ms-input-placeholder { 
          color: #eaeaea;
        }

        }
      `}</style>
    </div>
  )
}

export default Home;