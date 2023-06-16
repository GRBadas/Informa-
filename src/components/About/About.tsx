import AboutStyle from "./AboutStyle";
import { FaJava, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiMysql, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiSpringboot, SiTypescript } from 'react-icons/si';
import foto from "../../assets/imgs/fakenews.jpg"
import React from "react";

function About () { 

    return (
      <AboutStyle>
        <section id="about">
          <div className="about-title">Sobre Nós</div>
          <div className="container">
            <hr className="divider"/>
            <div className="info">
                <div className="container-info">
                    <div className="foto"><img src={foto} alt="" /></div>
                    <div className="text-head">
                      <div className="head-infos">Somos um grupo de universitários dedicados a combater as fake news. 
                      Nosso projeto social tem como objetivo promover a conscientização e fornecer recursos para evitar a disseminação de informações falsas. 
                      Estamos comprometidos em educar e capacitar as pessoas a serem consumidores críticos de notícias, contribuindo para um ambiente informativo confiável. 
                      Junte-se a nós nessa jornada de combate à desinformação!</div>
                      </div>
                    </div>
                <div className="text-info"> Em um mundo cada vez mais conectado e dependente da informação, percebemos o impacto significativo das fake news na sociedade. Presenciamos como notícias falsas podem se espalhar rapidamente, influenciando opiniões, criando divisões e até mesmo causando danos à saúde pública. Essa realidade despertou em nós, um grupo de universitários, a vontade de fazer a diferença e contribuir para combater essa problemática.

Decidimos criar esse projeto social com o objetivo claro de promover a conscientização e fornecer recursos para evitar a disseminação de informações falsas. Acreditamos que todos têm o direito de acessar informações confiáveis e tomar decisões informadas. Nosso objetivo é capacitar as pessoas a serem consumidores críticos de notícias, desenvolvendo habilidades para identificar, verificar e questionar a veracidade das informações que encontram.

Como estudantes universitários, reconhecemos a importância da educação na formação de uma sociedade mais informada e resistente à desinformação. Buscamos compartilhar conhecimento e melhores práticas por meio de artigos, guias e dicas práticas em nosso site. Também estamos engajados em parcerias com especialistas, professores e organizações comprometidas em promover a informação verídica.

Este projeto é movido pela convicção de que todos têm um papel importante na luta contra as fake news. Acreditamos que, ao unirmos nossos esforços e disseminarmos recursos confiáveis, podemos contribuir para a construção de um ambiente informativo mais seguro e confiável.

Sabemos que combater as fake news é um desafio complexo e em constante evolução, mas estamos determinados a fazer a nossa parte. Convidamos você a se juntar a nós nessa jornada de promover a verdade, o pensamento crítico e a responsabilidade na disseminação de informações. Juntos, podemos fazer a diferença e construir um mundo mais informado e resistente à desinformação.
                 </div>
            </div>
          </div>
        </section>
      </AboutStyle>
    );
}

export default About;