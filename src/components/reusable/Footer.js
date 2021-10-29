import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        // <footer>
        //     <div className="footer-block">
        //         <div className="container-fluid">
        //             <div className="row">
        //                 <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
        //                     <h6>Awesome copyright footer &copy; 2021</h6>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <footer>
      <div className="social-icons">
        <Link
          className="s1"
          to="https://www.facebook.com/tri.nath.96930"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" alt=""
        /></Link>
        <Link
          className="s2"
          to="https://instagram.com/spontstore?utm_medium=copy_link"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt=""
        /></Link>
        <Link
          className="s3"
          to="https://twitter.com/Trinath_3?t=pJUCo9Vvt3qvHLgPRe1Uig&s=08"
          target="_blank"
          ><img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png" alt=""
        /></Link>
        <Link
          className="s4"
          to="https://www.linkedin.com/in/ravula-thrinath-42a3491b7" target="_blank"
          ><img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-circled--v2.png" alt=""
        /></Link>
        <Link className="s5" to="https://github.com/RavulaThrinath" target="_blank"
          ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt=""
        /></Link>
      </div>
      <p className="footer-class">
          Created By <span>Thrinath Ravula</span> &copy; 2021 All rights reserved.
      </p>
    </footer>
    )
}
