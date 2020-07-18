import React from 'react';
import { Link } from 'react-router-dom';

class nav extends React.Component {
    scrollstart() {
        window.scrollTo(0, 0);
    }

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    burgerAnim() {
        if (window.screen.width < 800){
            document.querySelector("#nav-icon3").classList.toggle("open");
            document.querySelector("div.bandeau").classList.toggle("dispar");
            console.log("okk");
        }
    }
    
    render() {

        function Rubrique(props) {
            return <a href={props.lien} className="Rubrique">{props.name}</a>;
        }

        return (
            <nav>
                <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                </div>
                <div className="ctnBandeau">
                    <div className="bandeau">
                        <div className="logo" onClick={this.scrollstart}>
                            <a href="#Head" className="width-max" ></a>
                        </div>
                        <div className="Alignrubrique">
                            <a onClick={this.burgerAnim} className=" burger"><div id="nav-icon3"><span className="burgerm"></span><span className="burgerm"></span><span className="burgerm"></span><span className="burgerm"></span></div></a>
                            <a onClick={this.burgerAnim} href="#Head" className="Rubrique burger"><div className="logo2"></div></a>
                            <a onClick={this.burgerAnim} href="#propos" className="Rubrique">À propos</a>
                            <a onClick={this.burgerAnim} href="#parcours" className="Rubrique">Expérience professionnelle</a>
                            <a onClick={this.burgerAnim} href="#competence" className="Rubrique">Compétences</a>
                            <a onClick={this.burgerAnim} href="#projets" className="Rubrique">Projets</a>
                            <a onClick={this.burgerAnim} href="#contact" className="Rubrique">Contact</a>
                            <a onClick={this.burgerAnim} href="https://github.com/Gwendolabendooo/sonsAnimaux/raw/master/CV-Gwendal_Le_Floch.pdf" className="Rubrique">CV</a>
                        </div>
                    </div>
                </div>
            </nav>
        )  
    }
}
export default nav;