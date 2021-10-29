import React from "react"
import Heading from "../reusable/Heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    // <section className="py-3">
    //     <div className="col-10 sm-8 mx-auto">
    //         <form action="https://formspree.io/f/xknkadrr" method="POST">
    //             <div className="form-group">
    //                 <input type="text" name="name" id="name" placeholder="Your Name" className="form-control" />
    //             </div>
    //             <div className="form-group">
    //                 <input type="email" name="email" id="email" placeholder="Your Email" className="form-control" />
    //             </div>
    //             <div className="form-group">
    //                 <input type="text" name="mobile" id="mobile" placeholder="Your Number" className="form-control" />
    //             </div>
    //             <div className="form-group">
    //                 <textarea type="text" name="mobile" id="mobile" placeholder="Your Message" className="form-control" />
    //             </div>
    //             <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
    //         </form>
    //     </div>

    // </section>
    <section className="contact" id="contact">
      <div className="max-width">
      <Heading title="Contact Us" />
        <div className="contact-content">
          <div className="column left">
            <p className="text">Get in Touch</p>
            <p className="text-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ducimus porro libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ducimus porro libero.
            </p>
            <div className="icons">
              <div className="row">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Thrinath Ravula</div>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">
                    Vittal Nagar, Chirala, Prakasam Dist
                  </div>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">thrinathravual@gmail.com </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message Me</div>
            <form action="https://formspree.io/f/xknkadrr" method="POST">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field subject">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="textarea  ">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Describe Project"
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
