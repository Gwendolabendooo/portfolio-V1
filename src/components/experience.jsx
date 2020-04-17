import React from 'react';

class Experience extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
            <div className="experience" id="experience">
                <div className="ctnPhrise2">
                    <div className="titleExperience">
                        Expèriences
                    </div>
                    <div className="phrise">
                        <BlocPhrise class="ctnPhrise kam" title="Kameleoon" desc="J'ai pu effectuer un stage de 2 mois dans l'entreprise kameleoon. Cette entreprise propose à d'autres entreprises d'améliorer le rendement de leur site web avec des solutions d'A/B testing. Cdiscount en fait d'ailleurs parti" annee="2019"></BlocPhrise>
                        <BlocInversePhrise class="ctnPhrise inverse inst" title="Instant@net" desc="J'ai efféctuer mon premier stage en 3eme dans l'entreprise Instant@net. c'est grâce à cette dernière que j'ai pu découvrir que l'informatique  m'attirais." annee="2015"></BlocInversePhrise>
                    </div>
                </div>
            </div>
        )
    }

}

export default Experience;