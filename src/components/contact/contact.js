import React from "react";
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter,faSquareInstagram,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
export function Contact() {
    return (
        <>
            <footer class="text-center text-lg-start text-muted" id="last2">
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://twitter.com/afrudeen45" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/shahid-afrudeen-914723286/" class="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/afrudeen45" class="me-4 text-reset">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>ADDRESS
                                </h6>
                                <p><a href="#">
                                    61c,Thippu nagar,karumbukkadai,
                                    Coimbatore 641-008
                                </a></p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><a href="tel:8220012719"><FontAwesomeIcon icon={faPhone}/> 8220012719</a></p>
                                <p><a href="mailto:afrutheen45@gmail.com"> <FontAwesomeIcon icon={faEnvelope}/> afrutheen45@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-4 fw-bold">
                    © 2023 Shahid's Porfolio:
                </div>
            </footer>
        </>
    )
}





