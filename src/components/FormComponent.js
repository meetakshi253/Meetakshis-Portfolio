export default function FormComponent(prop) {
    return (
        <form netlify="true"
            netlify-honeypot="bot-field" name="contact" onSubmit={prop.handleSubmit}>

            <label htmlFor="name">
                Name</label>
            <br />
            <input type="textbox"
                value={prop.data.name}
                name="name"
                placeholder="Name"
                className="form-item"
                id="name"
                required
                onChange={prop.handleChange}
            />

            <br />

            <label htmlFor="email">
                Email</label>
            <br />
            <input type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="form-item"
                value={prop.data.email}
                required
                onChange={prop.handleChange}
            />

            <br />

            <label htmlFor="message">
                Message</label>
            <br />
            <textarea placeholder="Message"
                rows="5"
                className="form-item"
                id="message"
                required
                onChange={prop.handleChange} />
            <br />

            <button className="btn">Send Message</button>

        </form>
    )
}