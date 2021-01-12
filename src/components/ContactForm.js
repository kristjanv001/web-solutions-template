import React, { useState } from "react";

export default function ContactForm() {
  const functionURL = ""; // replace with your own path to twilio's serverless function

  // This serverless function can look something like this:

  /* 
    
  const sgMail = require("@sendgrid/mail")

  exports.handler = async function (context, event, callback) {
  sgMail.setApiKey(context.SENDGRID_API_KEY)

  const response = new Twilio.Response()
  response.setHeaders({
    "Access-Control-Allow-Origin": "", // NB! replace with your domain
    "Content-Type": "application/json",
  })

  const text = `from: ${event.fromEmail}, body: ${event.body}`

  const message = {
    to: "", // replace this with your email address
    from: "", // NB! replace this with your email address that is verified by sendgrid verified
    subject: event.subject,
    text,
  }

  try {
    await sgMail.send(message)
    response.setBody({})
    response.setStatusCode(200)
  } catch (error) {
    response.setBody({ error: error.message })
    response.setStatusCode(error.code)
  }

  callback(null, response)
  }

  */

  const [fromEmail, setFromemail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState("");

  const onClick = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const response = await fetch(functionURL, {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({ fromEmail, subject, body }).toString(),
    });
    if (response.status === 200) {
      setSent("Message sent!");
      setError(null);
      setSubmitting(false);
      setFromemail("");
      setSubject("");
      setBody("");
    } else {
      const json = await response.json();

      setError(json.error);
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-content container">
        <div className="form">
          <h2 className="main-heading">Let's start a conversation</h2>
          <h3 className="sub-heading">
            John is looking forward to hearing about your thoughts{" "}
          </h3>

          <form className="email-collector" method="post" action={functionURL}>
            <input
              type="email"
              name="fromEmail"
              id="fromEmail"
              value={fromEmail}
              onChange={(e) => setFromemail(e.target.value)}
              required
              placeholder="Email"
            ></input>

            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Subject"
            />

            <textarea
              style={{
                height: `125px`,
              }}
              name="body"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              placeholder="Message"
            />
            <button
              className="btn btn-form btn-accent"
              type="submit"
              disabled={submitting}
              onClick={onClick}
            >
              Send message
            </button>
          </form>
          <div>
            <p style={{ color: "green" }}>{sent}</p>
            <div>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
