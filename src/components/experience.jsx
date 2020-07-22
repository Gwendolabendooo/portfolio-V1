import React from 'react';

class Experience extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <div className="experience" id="experience">
                <div className="ctnPhrise2">
                    <div className="titleExperience">
                        Expèriences
                    </div>
                    <div className="phrise ph2">
                        <div className="lienPhrise kamphone">
                            <div className="ctnPhrise kam">
                                <div className="titlePhrise">
                                    Kameleoon
                                </div>
                                <div className="descPhrise">
                                    J'ai effectuer un stage de 2 mois dans l'entreprise kameleoon. Cette entreprise propose à d'autres entreprises d'améliorer le rendement de leur site web avec des solutions d'A/B testing. Cdiscount en fait d'ailleurs partie.
                                </div>
                            </div>
                            <div className="bulle">
                                <div className="txtBulle">
                                    2019
                                </div>
                            </div>
                        </div>
                        <div className="lienPhrise inverse bulleInverse instphone">
                            <div className="ctnPhrise inverse inst">
                                <div className="titlePhrise">
                                    Instant@net
                                </div>
                                <div className="descPhrise">
                                    J'ai efféctuer mon premier stage en 3eme dans l'entreprise Instant@net. c'est grâce à cette dernière que j'ai pu découvrir que l'informatique m'attirais.
                                </div>
                            </div>
                            <div className="bulle inverse">
                                <div className="txtBulle">
                                2015
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Experience;