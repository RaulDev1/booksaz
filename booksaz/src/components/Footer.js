import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>ABOUT US</h4>
            <h1 className="list-unstyled">
              <li>+994506116165</li>
              <li>Azerbaijan, Baku</li>
              <li>Books AZ</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Pricing</h4>
            <ui className="list-unstyled">
              <li>1 month - 5 AZN</li>
              <li>2 months - 8 AZN</li>
              <li>1 year - 25 AZN</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>OTHER INFORMATION</h4>
            <ui className="list-unstyled">
              <li></li>
              <li>WEBSITE CREATED BY - Raul:)</li>
              <li>SUBSCRIPTION</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BOOKS.AZ | Copyright |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;