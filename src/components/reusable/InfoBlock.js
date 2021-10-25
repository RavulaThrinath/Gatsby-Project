import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              aperiam at minima iste assumenda aspernatur, beatae eaque alias,
              magnam amet molestias? Eum facere perferendis iure eos ad
              explicabo eligendi ipsum vel placeat accusantium ut fuga
              perspiciatis, officia illum repellendus nostrum nisi labore modi
              cumque veniam nemo unde beatae exercitationem? Voluptates
              inventore perspiciatis voluptatibus optio sunt voluptate
              repudiandae nesciunt recusandae dolor impedit officiis, quasi
              perferendis pariatur tempora explicabo veritatis. Velit
              dignissimos corrupti similique doloribus libero excepturi,
              incidunt accusamus, officiis tempora veniam mollitia ipsa ab
              tenetur iusto eum cumque vel <aspernatur className=""></aspernatur>
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
