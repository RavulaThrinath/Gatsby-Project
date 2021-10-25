import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading, subtitle }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5"  >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate excepturi veniam fugit doloribus ad commodi dolorem
              atque, porro tempora architecto recusandae, iure dolorum incidunt
              voluptatem temporibus! Nobis aliquam magnam dolorum. Quod labore
              vel cumque, doloribus provident illo perspiciatis voluptatem
              voluptas ipsum magni itaque dolores. Atque quia delectus
              necessitatibus assumenda itaque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum optio ullam inventore
              nihil! Corrupti fugiat laudantium laboriosam, tenetur ex sunt
              numquam voluptate suscipit perspiciatis aliquam aspernatur,
              soluta, nobis ipsa reprehenderit velit officia dolor omnis cumque
              obcaecati reiciendis maiores recusandae? Aspernatur repudiandae
              inventore, adipisci necessitatibus sequi magnam neque dignissimos
              dolorum dolorem. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Molestias dicta ut illo saepe impedit quia
              earum, voluptates amet sunt cumque? Dicta dignissimos magni, eum
              voluptatem eveniet, recusandae consequuntur odio non laudantium
              perspiciatis, laboriosam qui laborum! Quis sit quas quos velit!
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-white">Click Photos</h5>
                <p className="card-text text-white" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  ab itaque nam quasi aut natus numquam quia, non eum corporis
                  nobis distinctio repudiandae temporibus iusto minima placeat
                  laudantium recusandae tenetur.</p>

                <Link to="/" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
