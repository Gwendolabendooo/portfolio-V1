import React from 'react';

class parcours extends React.Component {
    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }
    
    render() {
        function BlocPhrise(props){
            return <div className="lienPhrise">
                        <div className={props.class}>
                            <div className="titlePhrise">
                                {props.title}
                            </div>
                            <div className="descPhrise">
                                {props.desc}
                            </div>
                        </div>
                        <div className="bulle">
                            <div className="txtBulle">
                                {props.annee}
                            </div>
                        </div>
                    </div>
        }

        function BlocInversePhrise(props){
            return <div className="lienPhrise inverse bulleInverse">
                        <div className={props.class}>
                            <div className="titlePhrise">
                                {props.title}
                            </div>
                            <div className="descPhrise">
                                {props.desc}
                            </div>
                        </div>
                        <div className="bulle inverse">
                            <div className="txtBulle">
                                {props.annee}
                            </div>
                        </div>
                    </div>
        }

        return (
            <div className="parcours" id="parcours"> 
                <div className="ctnParcours" style={{left: 0 + 'px'}} id="ctnParcours">
                    <div className="ctnPhrise1">
                        <div className="titleParcours">
                            Parcours
                        </div>
                        <div className="phrise">
                            <BlocPhrise class="ctnPhrise dut" title="DUT Informatique" desc="J'ai étudié à l'IUT de Toulouse (Paul Sabatier) dans le département Informatique, j'ai pu acquérir des compétences dans le développement web, la programmation et en gestion de projet." annee="2019 2020"></BlocPhrise>
                            <BlocInversePhrise class="ctnPhrise inverse l1info" title="L1 informatique" desc="J'ai étudié en licence informatique, à Albi (Champollion) dans le département Informatique, j'ai pu acquérir des compétences dans le développement, plutôt accés python et java." annee="2018 2019"></BlocInversePhrise>
                            <BlocPhrise class="ctnPhrise bac" title="BAC STI2D" desc="J'ai obtenue mon diplome avec mention au lycée Antoine Bourdelle. J'y ai pu découvrir mon attirence de l'informatique grâce a ces premiers projets." annee="2017 2018"></BlocPhrise>
                        </div>
                    </div>
                    <div className="ctnExp">
                    </div>
                </div>
            </div>
        )
    }
}
export default parcours;