import React, { Component } from 'react';

class propos extends React.Component {  
    constructor(props) {
        super(props);
      }
    
    getRandomInt() {
        var c1 = document.querySelector("div.carre.c1");
        var c2 = document.querySelector("div.carre.c2");
        var c3 = document.querySelector("div.carre.c3");
        var c4 = document.querySelector("div.carre.c4");
        var c5 = document.querySelector("div.carre.c5");
        var c6 = document.querySelector("div.carre.c6");
        var c7 = document.querySelector("div.carre.c7");
        var listCarre = [c1, c2, c3, c4, c5, c6, c7];

        for (const i in listCarre) {
            var min = Math.ceil(-100);
            var max = Math.floor(-30);  
            var a = Math.floor(Math.random() * Math.floor(60));
            var b = Math.floor(Math.random() * (max - min)) + min;
            var c = Math.floor(Math.random() * Math.floor(360));
            listCarre[i].style.left = a + "%";
            listCarre[i].style.bottom = b + "%";
            listCarre[i].style.transform = "rotate(" + c + "deg)";
        }
      }

    
    render() {
        function ProfilTemp(props) {
                return <div className="profilTxt">
                <div className="profilForm">
                {props.title} :
                </div>
                <div className="profilResp">
                {props.desc}
                </div>
                </div>
        }

        return (
            <div id="propos">
                <div className="ctnPropos">
                    <div>
                        <div className="carre c1" onMouseEnter={this.getRandomInt}></div>
                        <div className="carre c2" onMouseEnter={this.getRandomInt}></div>
                        <div className="carre c3" onMouseEnter={this.getRandomInt}></div>
                        <div className="carre c4" onMouseEnter={this.getRandomInt}></div>
                        <div className="carre c5" onMouseEnter={this.getRandomInt}></div>
                        <div className="carre c6" onMouseEnter={this.getRandomInt}></div>
                        <div className="carre c7" onMouseEnter={this.getRandomInt}></div>
                    </div>
                    <div className="backTitlePropos">
                        <div className="titlePropos">
                            À propos
                        </div>
                    </div>
                    <div className="formesPropos">
                        <div className="losange los1">
                            <div className="ellipse"></div>
                        </div>
                        <div className="losange los2 losLeft"></div>
                        <div className="losange los2 losRight"></div>
                        <div className="ellipse ellipseLeft"></div>
                        <div className="trait"></div>
                    </div>
                    <div className="backDescPropos">
                        <div className="textPropos">
                            Je suis étudiant en informatique et j'ai pu effectuer quelques projets présentés ci-dessous. J'ai fait ce site afin de mieux vous présenter mon parcours et de vous présenter ce que j'ai pu faire.
                        </div>
                        <div className="textPropos textPropos2">
                            Je recherche actuellement un stage de une à quatre semaine, afin de confirmer mes compétences en code, et me permettre d'acquerir d'autres compétences pour pouvoir prévoir a un poste de développeur dans les années futurs.
                        </div>
                        <div className="textPropos textPropos3">
                            Je vous mets donc a diposition mon CV <a className="bouton">Telecharger</a>
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
                            <ProfilTemp title="Nationalité" desc="Française"></ProfilTemp>
                            <ProfilTemp title="Tèl" desc="06 12 10 05 72"></ProfilTemp>
                            <ProfilTemp title="Mail" desc="Gwendal.lefloch82@gmail.com"></ProfilTemp>
                            <ProfilTemp title="LinkedIn" desc="Voir mon profil"></ProfilTemp>
                            <ProfilTemp title="Permis" desc="Permis B"></ProfilTemp>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}
export default propos;
