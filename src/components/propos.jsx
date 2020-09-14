import React, { Component } from 'react';

class propos extends React.Component {  
    constructor(props) {
        super(props);
      }

    
    render() {
        function ProfilTemp(props) {
                return <div className="profilTxt">
                <div className="profilForm">
                {props.title} :
                </div>
                <a href={props.link} target="blank" className="profilResp">
                {props.desc}
                </a>
                </div>
        }

        return (
            <div id="propos">
                <div className="ctnPropos">
                    <div className="backTitlePropos">
                        <div className="titlePropos">
                            À propos
                        </div>
                    </div>
                    <div className="formesPropos">
                        <div className="trait">
                            <div className="carree cc1"></div>
                            <div className="portail port2"></div>
                            <div className="portail port1"></div>
                        </div>
                    </div>
                    <div className="backDescPropos">
                        <div className="textPropos">
                            Bonjour, je suis étudiant en informatique et j'ai pu effectuer quelques projets présentés ci-dessous. J'ai fait ce site afin de mieux vous présenter mon parcours et de vous présenter ce que j'ai pu réaliser.
                        </div>
                        <div className="textPropos textPropos2">
                            Je recherche actuellement un stage de 2 mois dans une entreprise spécialisée web, dans laquelle il serait-possible d'utiliser des langages tel que HTML, CSS et Javascript.
                        </div>
                        <div className="textPropos textPropos3">
                            Je vous mets donc à diposition mon CV <a className="bouton" href="https://github.com/Gwendolabendooo/sonsAnimaux/raw/master/CV-Gwendal_Le_Floch.pdf">Telecharger</a>
                        </div>
                    </div>
                </div>
                <div className="presentation">
                    <div className="profil">
                        <div className="pp"></div>
                        <div className="ctnProfil">
                            <div className="styleMore dcarre1"></div>
                            <div className="styleMore dcarre"></div>
                            <ProfilTemp title="Nom" desc="Le Floch"></ProfilTemp>
                            <ProfilTemp title="Prénom" desc="Gwendal"></ProfilTemp>
                            <ProfilTemp title="Âge" desc="19 ans"></ProfilTemp>
                            <ProfilTemp title="Tèl" desc="06 12 10 05 72"></ProfilTemp>
                            <ProfilTemp title="Mail" desc="Gwendal.lefloch82@gmail.com"></ProfilTemp>
                            <ProfilTemp title="LinkedIn" link="https://www.linkedin.com/in/gwendal-le-floch-66a3361b7/" desc="Gwendal Le Floch"></ProfilTemp>
                            <ProfilTemp title="Permis" desc="Permis B"></ProfilTemp>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}
export default propos;