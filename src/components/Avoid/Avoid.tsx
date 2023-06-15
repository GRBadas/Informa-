import { useState } from 'react';
import ProjectsStyle from './AvoidStyle';
import React from 'react';

function Avoid() {

  return (
    <section id="Projetos">
      <ProjectsStyle>
        <div className="container">
          <div className="title">Como evitar as fake news</div>
          <div className="projects-container">
            <div className='tips'>
                <div className='introtip'>
                Combater a disseminação de fake news é uma tarefa coletiva que envolve esforços de indivíduos, plataformas de mídia social, organizações de notícias e governos. 
                Aqui estão algumas estratégias importantes para combater a disseminação de fake news:
                </div>
                    <li>Verifique a fonte: Sempre verifique a fonte da notícia antes de compartilhá-la ou acreditar nela. Confira se é de um veículo de mídia confiável e reconhecido. Desconfie de sites desconhecidos ou com nomenclaturas estranhas.</li>
                    
                    <li>Analise o título: Muitas vezes, os títulos sensacionalistas são usados para atrair a atenção do leitor. Leia atentamente o título e verifique se o conteúdo reflete de fato o que está sendo apresentado.</li>
                    
                    <li>Leia a notícia completa: Não confie apenas nos trechos ou manchetes. Leia a notícia completa para obter todos os detalhes e contexto. Às vezes, informações importantes são omitidas nas partes iniciais da notícia.</li>
                    
                    <li>Verifique outras fontes: Consulte outras fontes de notícias confiáveis para verificar se a informação está sendo relatada de maneira consistente. Se apenas uma fonte estiver divulgando a notícia, especialmente se for uma fonte desconhecida, seja cauteloso.</li>
                    
                    <li>Pesquise o autor: Procure informações sobre o autor da notícia. Verifique sua credibilidade, histórico e se ele possui especialização no assunto abordado. Isso pode ajudar a determinar a confiabilidade da informação.</li>
                    
                    <li>Confirme com fontes oficiais: Sempre que possível, confirme informações com fontes oficiais, como agências de notícias reconhecidas, órgãos governamentais ou instituições especializadas na área em questão.</li>
                    
                    <li>Esteja atento a erros gramaticais e ortográficos: Muitas fake news contêm erros gramaticais ou ortográficos evidentes. Fique atento a esses sinais, pois podem indicar falta de veracidade na notícia.</li>
                    
                    <li>Desconfie de conteúdos sensacionalistas: Notícias com apelos emocionais exagerados, imagens chocantes ou declarações extremas podem ser indicadores de fake news. Procure informações equilibradas e imparciais.</li>
                    
                    <li>Verifique a data da publicação: Algumas fake news são recicladas e compartilhadas repetidamente ao longo do tempo. Verifique a data de publicação para se certificar de que a informação é atual e relevante.</li>
                    
                    <li>Seja crítico e questionador: Desenvolva um pensamento crítico e questione a veracidade das informações. Procure por evidências, dados e fatos que corroborem a notícia.</li>
            </div>
          </div>
        </div>
      </ProjectsStyle>
    </section>
  );
}

export default Avoid;