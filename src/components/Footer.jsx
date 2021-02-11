import { ORG_EMAIL, ORG_LOGO, ORG_NAME } from "../lib/constants"
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <h2>
                <img src={ORG_LOGO} width="30px" alt="" />
                {ORG_NAME}
            </h2>
        Feel free to Contact Us at {ORG_EMAIL}

            <div className="main-container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h5>THICC MEMES INC</h5>
                        <h4 className="list-unstyled">
                            <li>999-999-9999</li>
                            <li>Hyderabad - Telangana</li>
                            <li>INDIA</li>
                        </h4>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ui className="list-unstyled">
                            <li>Computer</li>
                            <li>Electronics</li>
                            <li>Graphics</li>
                            <li>VFX</li>
                            <li>Services</li>
                            <li>Cloud</li>

                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>COMPLIMENTS :-)</h4>
                        <ui className="list-unstyled">
                            <li>OWNER</li>
                            <li>NENE</li>
                            <li>GUD STUFF RIGHT !!!</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
                </div>
            </div>
        </div>
    )
}