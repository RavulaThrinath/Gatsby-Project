import React, { Component } from "react"
import Heading from "../reusable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
    }
  }

  render() {
    // console.log(this.state.courses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex ">
                      <h6 className="mb-6">{node.title}</h6>
                      <h6 className="mb-6 text-success ml-5">$ {node.pricing}</h6>
                    </div>
                    <p className="text-muted">{node.description.description}</p>
                    <button 
                     data-item-id={node.id}
                     data-item-price={node.pricing}
                     data-item-url="https://shopandship.netlify.app/"
                     data-item-image={node.image.fixed.src}
                     data-item-name={node.title}
                    className="btn btn-warning snipcart-add-item">
                      Join now</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
