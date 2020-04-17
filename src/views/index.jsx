import Preloader from '../components/preloader';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Propos from '../components/propos';
import Parcours from '../components/parcours';
import Rattrapage from '../components/rattrapage';
import Experience from '../components/experience';
import Competences from '../components/competences';
import Projets from '../components/projets';
import Contact from '../components/contact';
import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Preloader />
                <Nav />
                <Header />
                <Propos />
                <Parcours/>
                <Experience/>
                <Competences/>
                <Projets/>
                <Rattrapage/>
                <Contact/>
                <Footer />
            </body>
        )
    }

}

export default Index;