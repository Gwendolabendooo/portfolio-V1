import React, { Component } from 'react';

class competences extends React.Component {  
    popinCompetence(){
        
    }
    
    render() {
        function Competence(props) {
            return  <div className="competence">
                        <div className={props.t2}>
                            <div className= {props.type} ></div>
                            <div className="pourcentage">
                                5%
                            </div>
                        </div>
                    </div>
          }

        return (
            <div className="competences" id="competence">
                <div className="titleCompetences">
                    Compétences
                </div>
                <Competence t2="ctnCompetence" type="html img-bulle"></Competence>
                <Competence t2="ctnCompetence" type="css img-bulle"></Competence>
                <Competence t2="ctnCompetence" type="js img-bulle"></Competence>
                <Competence t2="ctnCompetence" type="java img-bulle"></Competence>
                <Competence t2="ctnCompetence" type="react img-bulle"></Competence>
                <Competence t2="ctnCompetence" type="mysql img-bulle"></Competence>
            </div>
        )  
    }
}
export default competences;