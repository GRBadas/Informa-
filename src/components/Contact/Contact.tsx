import ContactStyle from "./ContactStyle";
import { BsInstagram, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import React from "react";

function Contact() {

    return(
        <ContactStyle>
        <section id="Contato  ">
            <div className="container">
                <div className="title">
                    Tem dúvidas ou relatos sobre fake news ?
                        Nos contate !
                </div>
                    <ul className="social">
              <li>
                <a
                  href="mailto:grbadas@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FiMail />
              </a>
              </li>
            <li>
              <a
                href="https://contate.me/badasdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-badaró-22b5b5234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GRBadas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
            </div>
        </section>
        </ContactStyle>
    )
}

export default Contact;