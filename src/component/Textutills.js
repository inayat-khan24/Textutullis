import React, { useState } from 'react';

function TextUtills(props) {
  let [text, setText] = useState('');
  const [typingStart, setTypingStart] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);

  // covert in lowercase of text
  let lowerCase = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("converted to lower case","success")

  };

  //convert in uppercase of text
  let upperCase = () => {
    console.log(text);
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.showAlert("converted to upper case","success")
  };

  // get input Textarea value
  let getvalue = (e) => {
    let value = e.target.value;

    if (text.length === 0) {
      // Start timer when user starts typing
      setTypingStart(Date.now());
    }

    setText(value);

    // Calculate typing speed in characters per second
    if (typingStart) {
      const durationInSeconds = (Date.now() - typingStart) / 1000;
      const speed = value.length / durationInSeconds;
      setTypingSpeed(speed.toFixed(2)); // Two decimal places
    }
  };

  //clearText text
  let clearText = () => {
    let clearText = '';
    setText(clearText);
    props.showAlert("clear text","success")
  };

  // copy test function
  let copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copy text","success")
  };

  return (
    <>
      <div className="container my-5">
        <h1 className={`text-${props.mode == 'light' ? 'dark' : 'light'}`}>
          {props.heading}
        </h1>
        <textarea
          className={`form-control mb-3 `}
          style={{
            backgroundColor: props.mode == 'light' ? 'white' : 'gray',
            color: props.mode == 'dark' ? 'white' : '#42743',
          }}
          value={text}
          rows="8"
          onChange={getvalue}
          placeholder={props.headline}
        ></textarea>
        {/* for button  */}
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={lowerCase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={upperCase}>
            Convert to Uppercase
          </button>

          <button className="btn btn-primary" onClick={clearText}>
            Clear Text
          </button>

          <button className="btn btn-primary" onClick={copyText}>
            Copy
          </button>
        </div>
        {/* end button event */}

        {/* this div or details */}
        <div
          className={`container text-${
            props.mode == 'light' ? 'dark' : 'light'
          }`}
        >
          <h1> you text summary </h1>
          <p>
            {text.split(' ').length - 1} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(' ').length} minutes read</p>
          <p>{`Typing speed: ${typingSpeed} characters per second`}</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        {/* end details  div or */}
      </div>
    </>
  );
}

export default TextUtills;
