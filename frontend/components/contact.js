import React, { useState } from 'react';

const Contact = ({ theme }) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (

    <>

      <form id='contact' onSubmit={handleOnSubmit}>

        <input
          id="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          style={theme.input}
          placeholder='Name'
        />

        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
          style={theme.input}
          placeholder='Email'
        />

        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          style={theme.input}
          placeholder='Ask us anything'
        />

        <button style={theme.submit} type="submit" disabled={status.submitting}>
          {status.submitting ? 'Sending...' : status.submitted || status.info.error ? `${status.info.msg}` : 'Send Message'}
        </button>

      </form>


      <style jsx>{`
  
       form {
          padding: 2rem;
          min-height: 11rem;
          color: inherit;
          text-decoration: none;
        }

        textarea,
        input {
          background: transparent;
          resize: none;
          width: 100%;
          font: inherit;
          margin: 0.75rem 0;
          padding: 0.5rem;
          border: 1px solid transparent;
          border-radius: 0.4rem;
          background-color: transparent;
            -webkit-appearance: none;
        }

        textarea:focus,
        input:focus,
        textarea:hover,
        input:hover {
          outline: none;
          border-color: #ff66ff;
        }

        textarea {
          height: 5rem;
        }

        button {
          width: 100%;
          align-self: center;
          border: 1px solid transparent;
          border-radius: 0.4rem;
          height: 40px;
          margin-top: 1.5rem;
          font-size: 18px;
          transition: all 0.15s ease;
          background-color: transparent;
          color: #ff66ff;
          font-family: inherit;
          font-weight: 300;
        }

        button:hover {
          color: #ff66ff;
          cursor: pointer;
          border-color: #ff66ff;
        }

        .thanks {
          text-align: center;
          line-height: 30px;
          font-size: 22px;
          font-weight: 100;
        }

        .error {
          align-self: center;
          margin: 10px;
        }

        @media (max-width: 600px) {
         form {
            width: 100%;
            height: 100%;
            flex-direction: column;
            padding: 0.5rem;
          }
        }
          
      }`}</style>



  </>

  )
};

export default Contact;