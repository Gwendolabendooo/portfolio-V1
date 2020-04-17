import React from 'react';
import { Link } from 'react-router-dom';

class nav extends React.Component {
    scrollstart() {
        window.scrollTo(0, 0);
    }

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
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
                            <a href="/" className="width-max" ></a>
                        </div>
                        <div className="Alignrubrique">
                            <Rubrique lien="#propos" name="À propos" />
                            <Rubrique lien="#parcours" name="Expérience professionnelle" />
                            <Rubrique lien="#competence" name="Compétences" />
                            <Rubrique lien="#projets" name="Projets" />
                            <Rubrique lien="#contact" name="Contact" />
                            <Rubrique lien="/cv" name="CV" />
                        </div>
                    </div>
                </div>
            </nav>
        )  
    }
}
export default nav;