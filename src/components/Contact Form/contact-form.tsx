import { Component, h, } from '@stencil/core';

@Component({
    tag: 'contact-form',
    styleUrl: 'contact-form.css'
  })
  export class ContactForm {

    render() {
      return (
       

        
        <div>
        <div class="container">
          <form action="">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        
            <label htmlFor="country">Region</label>
            <select id="country" name="country">
              <option value="asia">Asia</option>
              <option value="australia">Australia</option>
              <option value="europe">Europe</option>
              <option value="usa">USA</option>
            </select>
        
            <label htmlFor="subject">Your Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        
            <input type="submit" value="Submit"/> 
            </form>
            </div>
            </div>
             
          
         

        
     
      );
    }
  }