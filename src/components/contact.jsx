import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles

class header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          nom: "",
          prenom: "",
          email: "",
          description: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("params avant:", formData);
        var formData = new FormData();
        // params.append('description', this.state.description);
        // console.log('nom', this.state.nom);
        // formData.append('username', 'Chris');
        // formData.append('username', 'Bob');
        formData.append('nom', this.state.nom);
        formData.append('prenom', this.state.prenom);
        formData.append('email', this.state.email);
        formData.append('description', this.state.description);

        // for (var value of formData.values()) {
        //     console.log(value); 
        //  }
        

        console.log("params apres:", formData);

        fetch('http://localhost/api/api.php', {
            credentials: 'include',
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                if (!res.update) {
                    console.log("pas de maj");
                } else {
                    this.componentDidMount();
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
            //     console.log("non", res[0][0], res[0][1], res[0][2], res[0][3]);
            // }

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

        const nom = this.state.nom;
        const prenom = this.state.prenom;
        const email = this.state.email;
        const description = this.state.description;

        return (
            <div className="contact" id="contact">
                <div className="ctnContact">
                    <div className="contactBox sendMsg">
                        <div className="titleCompetences2">
                            Me contacter
                        </div>
                        <form className="boxForm" onSubmit={this.handleSubmit} action="">
                            <input className="nom np" id="nom" value={this.state.nom} onChange={(e) => this.setState({nom: e.target.value})} type="text" placeholder="Nom" name="nom" />
                            <input className="prenom np" id="prenom" value={this.state.prenom} onChange={(e) => this.setState({prenom: e.target.value})} type="text" placeholder="Prenom" name="prenom" />
                            <input className="mail" id="mail" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" placeholder="Mail" name="Mail" />
                            <textarea  name="description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} placeholder="Votre message..."/>
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
            </div>
        )  
    }
}
export default header;