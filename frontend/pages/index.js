import { useState } from 'react';
import Head from 'next/head';
import { dark, light } from '../templates/themes';
import Contact from '../components/contact';

const Home = () => {
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState('_');
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? dark : light;


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
    <div className="container" style={theme}>
      <Head>
        <title>DevsFor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <code className="title">> DevsFor<code style={{color: '#ff66ff'}}>{display}</code></code>
        <form className="search" onSubmit={handleSubmit}>
          <input
            style={theme.search}
            type="text" 
            value={search}
            placeholder="Search..."
            onChange={handleChange}></input>
        </form>
        <div></div>
      </main>

      <footer style={theme.footer}>

        <div className='left'>

          <div className="copy">

            <p>DevsFor is a collective of software engineers providing full stack development and design services free of charge to charitable organizations, small businessess, non-profits, and activist groups. Send us a message for more information.</p>
            <p>Designed & Built by DevsFor in NYC | &copy; 2020</p>

            <p
              style={{ cursor: 'pointer' }} onClick={() => setDarkMode(!darkMode)}>Lights: {darkMode ? <i className="fas fa-toggle-off" /> : <i className="fas fa-toggle-on" />}
            </p>

          </div>

        </div>

        <Contact theme={theme} />


      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          transition: all 0.5s ease;
        }

        main {
          padding: 2rem 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        footer {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-content: space-between;
          padding: 1rem 5rem;
          transition: all 0.5s ease;
        }

        .left {
          width: 90%;
          display: flex;
          flex-direction: column;
          padding: 0 2rem;
        }

        .copy {              
          display: flex;
          flex-direction: column;
        }

        .copy p {
          line-height: 1.5rem;
        }

        .tools {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          font-size: 4rem;
          margin: 1rem 0;
        }

        .tools i {
          margin-right: 1rem;
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
        }

        input {
          border: 1px solid;
          font-size: 3rem;
          border-radius: 0.74rem;
          padding: 1rem;
          color: inherit;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          background-color: transparent;
            -webkit-appearance: none;
        }

        input:focus {
          outline: none;
          border-color: red;
        }

        @media (max-width: 800px) {
          main {
            width: 100%;
            padding: 0.5rem;
          }

          .title {
            text-align: center;
            font-size: 3.5rem;
            margin-top: 2rem;
          }

          form {
            margin: 6rem 0;
          }

          input {
            font-size: 1.5rem;
            width: 90%;
          }

          .info {
            font-size: 1.5rem;
            margin: 2rem;
            padding: 0;
          }

          .info p {
            margin: 0;
          }

          footer {
            width: 100%;
            flex-direction: column-reverse;
            padding: 1rem 2rem;
          }

          .left {
            width: 90%;
            padding: 0;
            justify-content: center;
            align-items: center;
            margin-top: 4rem;
          }

          p {
            padding: 0.5rem 0;
          }

          .tools {
            justify-content: center;
            width: 100%;
            text-align: center;
          }

          .toggle{
            margin-top: 1rem;
          }

          .copy {                  
            text-align: center;
            align-items: center;   
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
          background: ${theme.background};
        }

        * {
          box-sizing: border-box;
        }

        ::placeholder { 
          color: ${theme.placeholder};
          opacity: 1; 
        }

        :-ms-input-placeholder { 
          color: ${theme.placeholder};
        }

        ::-ms-input-placeholder { 
          color: ${theme.placeholder};
        }

        }
      `}</style>
    </div>
  )
}

export default Home;