import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-9 mx-auto text-center">
            <p className="lead text-white mb-4">
              Hey, This is Thrinath Ravula. I'm Born and raised in Chirala. I
              Pursued B.E in Computer Science as a main stream in sathyabama
              University where i've learnt many things. I did my schooling and
              intermediate in Chirala. My short-term goal is to get a job in a
              reputated company where i can prove my skills and improve my
              knowledge. My long-term goal is to be in a respectable position
              where i work.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">About Me</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
