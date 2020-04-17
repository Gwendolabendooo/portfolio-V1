import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class competences extends React.Component {  
    render() {
        library.add(
            faSearch
        )

        function Projet(props) {
            return  <div className="projet">
                        <div className={props.class}>
                            <div className="filtreProjet">
                                <div className="ctnMore">
                                    <div className="loop">
                                        <div className="ctnIc">
                                            <FontAwesomeIcon className="ico" icon={['fas', 'search']} />
                                        </div>
                                    </div>
                                    <div className="git">
                                        <div className="ctnIc">
                                            <div className="imgGit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="botFiltre">
                                    <div className="txtBotFiltre">
                                        {props.titre}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          }

        return (
            <div className="projets" id="projets">
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
                    <Projet class="ctnProjet backstud" titre="Stud'Lp"></Projet>
                    <Projet class="ctnProjet backopti" titre="Optinote"></Projet>
                    <Projet class="ctnProjet backmaison" titre="Maison 3D"></Projet>
                    <Projet class="ctnProjet backmaster" titre="Temple Run like"></Projet>
                    <Projet class="ctnProjet backmorp" titre="Morpion en ligne"></Projet>
                    <Projet class="ctnProjet backtchat" titre="Ancien portfolio"></Projet>
                </div>
            </div>
        )  
    }
}
export default competences;