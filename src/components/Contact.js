import React, { useState } from "react"
import axios from 'axios'

function Contact() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleServerResponse = (success, msg) => {
        if (success) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })

            setInputs({
                name: '',
                email: '',
                message: '',
            })
        }
        else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => (
            {
                ...prev,
                [e.target.id]: e.target.value,
            }
        ))

        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({
            ...prevStatus,
            submitting: true
        }))

        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mrgryvnd',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you for reaching out!'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            })

    }

    return (
        <section id="Contact" className="content">
            <div className="contact-container">
                <h3 className="section-title"><span>
                    Contact
                     </span>
                </h3>
                <div className="container-message-details error-message" id="projects-message"></div>
                <div className="container form-container">
                    <form onSubmit={handleOnSubmit}>

                        <label htmlFor="name">
                            Name</label>
                        <br />
                        <input type="textbox"
                            value={inputs.name}
                            name="name"
                            placeholder="Name"
                            className="form-item"
                            id="name"
                            required
                            onChange={handleOnChange}
                        />

                        <br />

                        <label htmlFor="email">
                            Email</label>
                        <br />
                        <input type="email"
                            placeholder="Email"
                            name="_replyto"
                            id="email"
                            className="form-item"
                            value={inputs.email}
                            required
                            onChange={handleOnChange}
                        />

                        <br />

                        <label htmlFor="message">
                            Message</label>
                        <br />
                        <textarea placeholder="Message"
                            rows="5"
                            className="form-item"
                            id="message"
                            name="message"
                            value={inputs.message}
                            required
                            onChange={handleOnChange} />
                        <br />

                        <button className="btn" type="submit" disabled={status.submitting}>{!status.submitting ? !status.submitted ? 'Send Message' : 'Message Sent!' : 'Sending Message'}</button>
                    </form>
                </div>
            </div>
            {/* {status.info.error && (
                document.getElementsByClassName("error-message")[0].innerHTML = status.info.msg
            )}
            {!status.info.error && status.info.msg && (document.getElementsByClassName("error-message")[0].innerHTML = status.info.msg)} */}
        </section>
    )

}

export default Contact
