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
          .catch((error) => alert('There was a problem submitting your form. Please try again'));
          e.preventDefault();
      }

    render() {
        return (
        <section id="Contact" className="content">
            <div className="contact-container">
                <h1 className="section-title"><span>
                    Contact
                    </span>
                </h1>
        <div className="container form-container">
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
