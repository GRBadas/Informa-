import { useEffect, useRef, useState } from 'react';
import HeroStyle from './HeroStyle';
import HeroImg from '../imgs/pessoaPensando.jpeg';
import React from 'react';

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HeroStyle>
      <section id="hero">
        <div className="welcome">
          <div className="text">
            <h1>
              Olá! Somos a Informa+
            </h1>
            <p>
            Descubra a verdade por trás das notícias falsas.
            </p>
          </div>
          <div className="img-container">
            <img
              src={HeroImg}
              alt=""
              className={`image-container ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {isHovered && (
              <div className="overlay">
                <div className="overlay-line">A <span>verificação de informações</span> é um pilar fundamental na era da informação em que vivemos.</div>
                <div className="overlay-line">
                Ao verificar a <span>veracidade</span>  das informações que recebemos, podemos evitar a disseminação de notícias falsas, boatos e informações enganosas,
                </div>
                <div className="overlay-line">
                promovendo um <span>ambiente de confiança e transparência.</span>
                </div>
                <div className="overlay-line">
                Além disso, a verificação de informações nos capacita a tomar decisões embasadas e informadas,
                </div>
                <div className="overlay-line">
                garantindo que estamos utilizando <span>dados confiáveis e precisos</span> como base para nossas ações e opiniões.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </HeroStyle>
  );
}

export default Hero;
