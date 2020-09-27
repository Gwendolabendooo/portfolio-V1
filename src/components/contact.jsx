import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faMapMarkerAlt, faMobileAlt, faBook} from "@fortawesome/free-solid-svg-icons";
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
          subject: "",
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
        
        document.querySelector("#contact > svg").classList.add("appartiones");
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
            faMobileAlt,
            faBook
        );
        const MY_API = 'AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk'
        let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=43.564706, 1.480144`

        const nom = this.state.nom;
        const subject = this.state.subject;
        const email = this.state.email;
        const description = this.state.description;

        return (
            <div className="contact" id="contact">
                <svg version="1.1" className="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                    <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>
                <div className="ctnContact">
                    <div className="contactBox sendMsg">
                        <div className="titleCompetences2">
                            Me contacter
                        </div>
                        <form className="boxForm" onSubmit={this.handleSubmit} action="">
                            <div className="ctn-mail">
                                <input className="mail" id="mail" type="email" autocomplete="off" required value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" name="Mail" />
                                <label id="maillab" for="Mail">Mail</label>
                            </div>
                            <div className="ctn-mail">
                                <input className="subject" id="subject" type="text" required autocomplete="off" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})} type="text" name="Subject" />
                                <label id="sublab" for="Subject">Sujet</label>
                            </div>
                            <textarea className="description" name="description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} placeholder="Votre message..."/>
                            <input className="send" type="submit" value="Envoyer" />
                        </form>
                    </div>
                    <div className="contactBox maps">
                        <div className="ctnBox">
                            <div className="ctnIframe">
                                <div className="info-perso info-tel">
                                    <FontAwesomeIcon className="ico-maps" icon={['fas', 'mobile-alt']} />
                                    06 12 10 05 72
                                </div>
                                <div className="info-perso info-mail">
                                    <FontAwesomeIcon className="ico-maps" icon={['fas', 'envelope']} />
                                    Gwendal.LeFloch82@gmail.com
                                </div>
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
