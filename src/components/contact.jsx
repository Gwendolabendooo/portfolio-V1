import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles

class header extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    render() {


        library.add(
            faUserCircle,
            faUser,
            faUnlockAlt,
            faEnvelope,
            faMapMarkerAlt,
            faMobileAlt
        );
        const MY_API = 'AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk'
        let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=43.564706, 1.480144`

        return (
            <div className="contact" id="contact">
                <div className="contactBox sendMsg">
                    <div className="titleCompetences">
                        Me contacter
                    </div>
                    <form className="boxForm" action="">
                        <input className="nom np" id="nom" type="text" placeholder="Nom" name="nom" />
                        <input className="prenom np" id="prenom" type="text" placeholder="Prenom" name="prenom" />
                        <input className="mail" id="Mail" type="text" placeholder="Mail" name="Mail" />
                        <textarea  name="message" placeholder="Votre message..."/>
                        <input className="send" type="submit" value="Envoyer" />
                        <FontAwesomeIcon className="img-user icoForm" icon={['fas', 'user']} />
                        <FontAwesomeIcon className="img-user2 icoForm" icon={['fas', 'user']} />
                        <FontAwesomeIcon className="icoForm img-env" icon={['fas', 'envelope']} />
                    </form>
                </div>
                <div className="contactBox maps">
                    <div className="ctnBox">
                        <div className="info-perso">
                            <FontAwesomeIcon className="ico-maps" icon={['fas', 'map-marker-alt']} />
                            Toulouse, France
                        </div>
                        <div className="info-perso">
                            <FontAwesomeIcon className="ico-maps" icon={['fas', 'mobile-alt']} />
                            06 12 10 05 72
                        </div>
                        <div className="info-perso">
                            <FontAwesomeIcon className="ico-maps" icon={['fas', 'envelope']} />
                            Gwendal.LeFloch82@gmail.com
                        </div>
                        <div className="ctnIframe">
                            <iframe frameBorder="0" style={{ width: "100%", height: "100%"}} 
                                src={_url}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}
export default header;