import React, { Component } from 'react';

class rattrapage extends React.Component {  
    render() {
        return (
            <div className="rattrapage">
                <div className="ctnRattrapage">
                    <div className="CtnMonCV">
                        <a className="monCV bouton2" href="https://github.com/Gwendolabendooo/sonsAnimaux/raw/master/CV-Gwendal_Le_Floch.pdf">
                            Consulter mon CV
                        </a>
                    </div>
                    <div className="CtnMecontacter">
                        <a className="meContacter bouton2" href="#contact">
                            Me contacter
                        </a>
                    </div>
                </div>
            </div>
        )  
    }
}
export default rattrapage;