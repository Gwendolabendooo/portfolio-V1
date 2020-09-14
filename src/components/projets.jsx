import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class competences extends React.Component {  
    pop1() {
        document.querySelector("#projets > div.backPopin").classList.toggle("blocc");
        if (window.fetch) {
            console.log(4+4);
        } else {
            // Faire quelque chose avec XMLHttpRequest?
        }
    }

    pop2() {
        document.querySelector("#projets > div.backPopin2").classList.toggle("blocc");
    }

    pop3() {
        document.querySelector("#projets > div.backPopin3").classList.toggle("blocc");
    }

    pop4() {
        document.querySelector("#projets > div.backPopin4").classList.toggle("blocc");
    }

    pop5() {
        document.querySelector("#projets > div.backPopin5").classList.toggle("blocc");
    }

    pop6() {
        document.querySelector("#projets > div.backPopin6").classList.toggle("blocc");
    }

    render() {
        library.add(
            faSearch,
            faTimes
        )

        return (
            <div className="projets" id="projets">
                                <div className="backPopin6">
                    <div className="Popin">
                        <img src="" alt=""/>
                        <FontAwesomeIcon className="cross" onClick={this.pop6} icon={['fas', 'times']} />
                        <div className="popinCtn">
                            <div className="ctnProd">
                                <div className="anneeProd">
                                    2018
                                </div>
                                <div className="prod">

                                </div>
                                <div className="ctnEtiquette">
                                    <div className="etiquette">
                                        HTML
                                    </div>
                                    <div className="etiquette">
                                        CSS
                                    </div>
                                    <div className="etiquette">
                                        Javascript
                                    </div>
                                    <div className="etiquette">
                                        Mysql
                                    </div>
                                    <div className="etiquette">
                                        PHP
                                    </div>
                                    <div className="etiquette">
                                        Responsive
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="borderSep"></div>
                        <div className="popinCtn1">
                            <div className="descProd">
                                <div className="titleProd">
                                    Portfolio V1
                                </div>
                                <div className="pkProd">
                                    Ce fut mon premier portfolio que j'ai réalisé à la fin de mon stage chez Kameleoon.
                                </div>
                                <div className="pkProd">
                                    Il avait pour objectif de me servir comme "brouillon" à l'élaboration de ce nouveau portfolio.
                                </div>
                                <a href="https://portfolio-v0.now.sh/" target="blank" className="bouton2 btnProd">
                                    M'y emmener
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backPopin5">
                    <div className="Popin">
                        <FontAwesomeIcon className="cross" onClick={this.pop5} icon={['fas', 'times']} />
                        <div className="popinCtn">
                            <div className="ctnProd">
                                <div className="anneeProd">
                                    2018
                                </div>
                                <div className="prod">

                                </div>
                                <div className="ctnEtiquette">
                                    <div className="etiquette">
                                        HTML
                                    </div>
                                    <div className="etiquette">
                                        CSS
                                    </div>
                                    <div className="etiquette">
                                        Javascript
                                    </div>
                                    <div className="etiquette">
                                        Mysql
                                    </div>
                                    <div className="etiquette">
                                        PHP
                                    </div>
                                    <div className="etiquette">
                                        Responsive
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="borderSep"></div>
                        <div className="popinCtn1">
                            <div className="descProd">
                                <div className="titleProd">
                                    Morpion en ligne
                                </div>
                                <div className="pkProd">
                                    Morpion en ligne est un projet que j’ai réalisé pour mon auto formation.
                                </div>
                                <div className="pkProd">
                                    Ce site est le premier que j'ai réalisé avec des communications entre les utilisateur, j'y ai également creer un tchat.
                                </div>
                                <a href="https://stud-lp.now.sh/" target="blank" className="bouton2 btnProd">
                                    M'y emmener
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backPopin">
                    <div className="Popin">
                        <FontAwesomeIcon className="cross" onClick={this.pop1} icon={['fas', 'times']} />
                        <div className="popinCtn">
                            <div className="ctnProd">
                                <div className="anneeProd">
                                    2019
                                </div>
                                <div className="prod">

                                </div>
                                <div className="ctnEtiquette">
                                    <div className="etiquette">
                                        HTML
                                    </div>
                                    <div className="etiquette">
                                        CSS
                                    </div>
                                    <div className="etiquette">
                                        Javascript
                                    </div>
                                    <div className="etiquette">
                                        React
                                    </div>
                                    <div className="etiquette">
                                        Mysql
                                    </div>
                                    <div className="etiquette">
                                        PHP
                                    </div>
                                    <div className="etiquette">
                                        Responsive
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="borderSep"></div>
                        <div className="popinCtn1">
                            <div className="descProd">
                                <div className="titleProd">
                                    Stud'LP
                                </div>
                                <div className="pkProd">
                                    Stud’LP est un projet que j’ai réalisé avec un groupe d’étudiants pour la nuit de l’info. 
                                </div>
                                <div className="pkProd">
                                    Ce site à pour objectif de regrouper tous les bons plan pour les étudiants en allant des applications astucieuse pour faire des économies, j'usqu'aux aides qu'ils peuvent bénéficier.
                                </div>
                                <a href="https://stud-lp.now.sh/" target="blank" className="bouton2 btnProd">
                                    M'y emmener
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backPopin4">
                    <div className="Popin">
                        <FontAwesomeIcon className="cross" onClick={this.pop4} icon={['fas', 'times']} />
                        <div className="popinCtn">
                            <div className="ctnProd">
                                <div className="anneeProd">
                                    2020
                                </div>
                                <div className="prod">

                                </div>
                                <div className="ctnEtiquette">
                                    <div className="etiquette">
                                        HTML
                                    </div>
                                    <div className="etiquette">
                                        CSS
                                    </div>
                                    <div className="etiquette">
                                        Javascript
                                    </div>
                                    <div className="etiquette">
                                        React
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="borderSep"></div>
                        <div className="popinCtn1">
                            <div className="descProd">
                                <div className="titleProd">
                                    Save US
                                </div>
                                <div className="pkProd">
                                    Save US est un webdoc que j'ai réalisé pour la fin de ma première année d'IUT.
                                </div>
                                <div className="pkProd">
                                    Ce webdoc à pour objectif de sensibiliser les visiteurs sur certains des animaux qui sont le plus en voie d'extinction.
                                </div>
                                <a href="https://save-us.gwendolabendooo.now.sh/" target="blank" className="bouton2 btnProd">
                                    M'y emmener
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backPopin2">
                    <div className="Popin">
                        <FontAwesomeIcon className="cross" onClick={this.pop2} icon={['fas', 'times']} />
                        <div className="popinCtn">
                            <div className="ctnProd">
                                <div className="anneeProd">
                                    2019
                                </div>
                                <div className="prod">

                                </div>
                                <div className="ctnEtiquette">
                                    <div className="etiquette">
                                        HTML
                                    </div>
                                    <div className="etiquette">
                                        CSS
                                    </div>
                                    <div className="etiquette">
                                        Javascript
                                    </div>
                                    <div className="etiquette">
                                        React
                                    </div>
                                    <div className="etiquette">
                                        Mysql
                                    </div>
                                    <div className="etiquette">
                                        PHP
                                    </div>
                                    <div className="etiquette">
                                        Responsive
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="borderSep"></div>
                        <div className="popinCtn1">
                            <div className="descProd">
                                <div className="titleProd">
                                    Optinote
                                </div>
                                <div className="pkProd">
                                    Optinote est un de mes projets personnel (auto formation).
                                </div>
                                <div className="pkProd">
                                    Ce site à pour objectif d'optimiser les prises de note et l'agenda des étudiants, prochainement il sera adapté en application mobile.
                                </div>
                                <a href="https://stud-lp.now.sh/" target="blank" className="bouton2 btnProd">
                                    M'y emmener
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backPopin3">
                    <div className="Popin">
                        <FontAwesomeIcon className="cross" onClick={this.pop3} icon={['fas', 'times']} />
                        <div className="popinCtn">
                            <div className="ctnProd">
                                <div className="anneeProd">
                                    2019
                                </div>
                                <div className="prod">

                                </div>
                                <div className="ctnEtiquette">
                                    <div className="etiquette">
                                        HTML
                                    </div>
                                    <div className="etiquette">
                                        CSS
                                    </div>
                                    <div className="etiquette">
                                        Responsive
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="borderSep"></div>
                        <div className="popinCtn1">
                            <div className="descProd">
                                <div className="titleProd">
                                    Maison 3D
                                </div>
                                <div className="pkProd">
                                    Maison 3D est un projet d'iut, mené en première année.
                                </div>
                                <div className="pkProd">
                                    Ce site à pour objectif de vendre des maison exclusivement construite à l'aide d'imprimante 3d, afin d'améliorer le rendement sur tous les points de vue de la construction de maison.
                                </div>
                                <a href="https://maison3-d.now.sh/" target="blank" className="bouton2 btnProd">
                                    M'y emmener
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="titleCompetences">
                    Projets
                </div>
                <div className="choixProjet">
                    <div className="choix1 choix">
                        Web
                    </div>
                    <div className="choix2 choix">
                        Mobile
                    </div>
                    <div className="choix3 choix">
                        Tous
                    </div>
                </div>
                <div className="margProj">
                    <div className="projet">
                        <div className="ctnProjet backstud">
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc" onClick={this.pop1}>
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <a target="blank" href="https://github.com/Gwendolabendooo/Stud-LP">
                                                <div className="imgGit">
                                                </div>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        Stud'Lp
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projet">
                        <div className="ctnProjet backopti">
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc" onClick={this.pop2}>
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <a target="blank" href="https://github.com/Gwendolabendooo/Stud-LP">
                                                <div className="imgGit">
                                                </div>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        Optinote
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projet">
                        <div className="ctnProjet backmaison">
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc" onClick={this.pop3}>
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <a target="blank" href="https://github.com/Gwendolabendooo/Maison3D">
                                                <div className="imgGit">
                                                </div>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        Maison 3D
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projet">
                        <div className="ctnProjet backmaster">
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc" onClick={this.pop4}>
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <a target="blank" href="https://github.com/Gwendolabendooo/Save-us">
                                                <div className="imgGit">
                                                </div>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        Save US
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projet">
                        <div className="ctnProjet backmorp">
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc" onClick={this.pop5}>
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <a target="blank" href="https://github.com/Gwendolabendooo/Save-us">
                                                <div className="imgGit">
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        Morpion en ligne
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projet">
                        <div className="ctnProjet backtchat">
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc" onClick={this.pop6}>
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <a target="blank" href="https://github.com/Gwendolabendooo/portfolioV0">
                                                <div className="imgGit">
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        Portfolio V1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}
export default competences;