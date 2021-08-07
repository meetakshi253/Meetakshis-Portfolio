import React, {Component} from "react"
import FormComponent from "./FormComponent"

function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }


class Contact extends Component
{
    constructor()
    {
        super()
        this.state = {
            name:'',
            email:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event)
    {
        const {name, value} = event.target
        this.setState({[name]:value})
    }
    
    handleSubmit(e) {
        e.preventDefault();

        // const status = this.state.email.length>0 && this.state.name.length>0 && this.state.message.length>0
        // if(!status)
        // {
        //     alert("Fill all entries")
        //     return
        // }

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state}),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      }

    render() {
        return (
        <section id="Contact" className="content">
            <div className="contact-container">
                <h1 className="section-title">
                    Connect with me
                </h1>
        <div className="container">
        <FormComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
        />
        </div>
        </div>
        </section> 
        )
    }
}

export default Contact

// function Contact(props)

// {
//     const [values, setValues] = useState({
//         name: '',
//         email: '',
//         message:'',
//     });

//     function validateForm()
//     {
//         return values.email.length>0 && values.name.length>0 && values.message.length>0
//     }

//     function handleSubmit(event)
//     {
//         const status = validateForm()
//         if(!status)
//             return
//         event.preventDefault();
//         alert("submitting")
//     }

//     return (

//    <section id="contact" className="content">
//        <div className="container2">
//          <form
//          netlify
//          name="contact"
//          className="contact-form"
//          onSubmit={handleSubmit}
//          >
//              <h2 className="contact-form-header">
//                 Drop a message
//              </h2>
//              <div className="contact-form-fields">
//                  <label htmlFor="name">
//                      Name: 
//                     <input 
//                     type= "text"
//                     id="name"
//                     name="name"
//                     value={values.name}
//                     onChange={e=> setValues(e.values.name)}>
//                     </input>
//                  </label>

//                  <label htmlFor="email">
//                      Email: 
//                     <input 
//                     type= "email"
//                     id="email"
//                     name="email"
//                     value={values.email}
//                     onChange={e=> setValues(e.values.email)}>
//                     </input>
//                  </label>

//                  <label htmlFor="message">
//                     Message: 
//                     <textarea 
//                     id="message"
//                     name="message"
//                     value={values.message}
//                     onChange={e=> setValues(e.values.message)}>
//                     </textarea>
//                  </label>

//                  <button className="btn"
//                      type="submit">
//                          Submit
//                  </button>

//              </div>
//          </form>
//        </div>

//    </section>
// )
// }


// export default Contact;