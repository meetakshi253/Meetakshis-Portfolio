export default function FormComponent(prop)
{
  return (
        <form name="contact" onSubmit={prop.handleSubmit}>
            <label for="name">
                Name</label>
                <br/>
           <input type="textbox"
            value={prop.data.name}
            name="name" 
            placeholder="Name" 
            className="form-item"
            id="name"
            onChange={prop.handleChange}
            /> 
            
           <br />
           
           <label for="email">
               Email</label>
               <br/>
            <input type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="form-item"
            value={prop.data.email}
            onChange={prop.handleChange}
            />
              
            <br />

            <label for="message">
                Message</label>
                <br/>
            <textarea placeholder="Message"
            rows="5"
            className="form-item"
            id="message"
            onChange={prop.handleChange}/>
            <br />

        <button className="btn">Send Message</button>

        </form>
)
}