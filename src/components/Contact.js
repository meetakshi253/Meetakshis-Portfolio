import React from "react"

function Contact()
{return (
   <section id="contact" className="content">
       <div className="container2">
         <form
         netlify
         name="contact"
         className="contact-form"
         >
             <h2 className="contact-form-header">
                Drop a message
             </h2>
             <div className="contact-form-fields">
                 <label htmlFor="name">
                     Name: 
                    <input 
                    type= "text"
                    id="name"
                    name="name">
                    </input>
                 </label>

                 <label htmlFor="email">
                     Email: 
                    <input 
                    type= "email"
                    id="email"
                    name="email">
                    </input>
                 </label>

                 <label htmlFor="message">
                    Message: 
                    <textarea 
                    id="message"
                    name="message">
                    </textarea>
                 </label>

                 <button className="btn"
                     type="submit">
                         Submit
                 </button>

             </div>
         </form>
       </div>

   </section>
)
}


export default Contact;