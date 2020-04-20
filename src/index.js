import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.onscroll = function() {
    var c1 = 0;

    scrollBar(), posExp(), colorNav();

    function scrollBar(){
        var v = window.pageYOffset;
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;

        if (document.documentElement.scrollTop > document.querySelector("body > header").offsetHeight -78){
            document.getElementById("myBar").style.width = scrolled + "%";
            document.querySelector("div.progress-container").style.width = '100%';
            document.querySelector("div.progress-container").style.top = '0';
            document.querySelector("div.formesPropos").style.animation = 'scaleUp 1s';
            document.querySelector("div.formesPropos").style.transform = 'scale(1)';
            
        }else{
            document.querySelector("div.progress-container").style.top = -6 + "px";
        }
    }

    function posExp(){
        let htMin = document.querySelector("div.parcours").offsetTop;
        let htExp = document.querySelector("div.experience").offsetTop;
        let widthExp = document.querySelector("#experience").offsetHeight / 2
        let htActuelle = document.documentElement.scrollTop;

        var opacité = 10 * (1 - htActuelle / htExp);
        if (htActuelle > htExp - widthExp) {
            document.querySelector("div.ctnParcours").style.opacity = opacité;
        }else{
            document.querySelector("div.ctnParcours").style.opacity = 1;
        }
        
        if (htActuelle >= htMin && htExp > htActuelle){
            document.querySelector("div.ctnParcours").style.position = "fixed";
            document.querySelector("div.ctnParcours").style.top = 0 + "px";
            defillement();
        }else if (htMin > htActuelle) {
            document.querySelector("div.ctnParcours").style.position = "relative";
        }else if (htExp <= htActuelle) {
            document.querySelector("div.ctnParcours").style.position = "relative";
            document.querySelector("div.ctnParcours").style.top = document.querySelector("div.experience").offsetTop - document.querySelector("body > div.parcours").offsetTop + "px";
            document.querySelector("div.ctnParcours").style.opacity = 0;
        }
    }

    function defillement() {
        let htActuelle = document.documentElement.scrollTop;
        let htExp = document.querySelector("body > div.parcours").offsetTop;

        document.querySelector("#ctnParcours").style.left = (htExp - htActuelle) + 'px';
    }

    function colorNav() {
        var propos = document.querySelector("#propos").offsetTop;
        var experience = document.querySelector("body > div.parcours").offsetTop;
        var competence = document.querySelector("body > div.competences").offsetTop;
        var projet = document.querySelector("body > div.projets").offsetTop;
        var contact = document.querySelector("body > div.contact").offsetTop;
        var footer = document.querySelector("body > footer").offsetTop;

        var listHeight = [propos, experience, competence, projet, contact, footer];

        for(let i = 1; i < 6; i++){
            if (document.documentElement.scrollTop > listHeight[i - 1] - 10 && document.documentElement.scrollTop <= listHeight[i] - 10) {
                document.querySelector("div.Alignrubrique > a:nth-child(" + i + ")").style.color = "#33E073";
                if (listHeight[i] == listHeight[3] && c1 < 1) {
                    animPadding();
                    animPercent();
                    c1++;
                }
            }else{
                document.querySelector("div.Alignrubrique > a:nth-child(" + i + ")").style.color = "white";
            }
        }
    }
};

function animPadding() {
    var html = document.querySelector("#competence > div:nth-child(2) > div");
    var css = document.querySelector("#competence > div:nth-child(3) > div");
    var js = document.querySelector("#competence > div:nth-child(4) > div");
    var java = document.querySelector("#competence > div:nth-child(5) > div");
    var react = document.querySelector("#competence > div:nth-child(6) > div");
    var mysql = document.querySelector("#competence > div:nth-child(7) > div");

    var icon = [html, css, js, java, react, mysql];

    html.classList.add("ctnHTML");
    css.classList.add("ctnCSS");
    js.classList.add("ctnJS");
    java.classList.add("ctnJAVA");
    react.classList.add("ctnREACT");
    mysql.classList.add("ctnMYSQL");

    for (let i = 0; i < icon.length; i++) {
        icon[i].animate([
            // keyframes
            { padding: '50px' },
            { padding: '65px' },
            { padding: '50px' }
        ], {
                // timing options
                delay: 350 * i,
                duration: 500,
                iterations: 1
            });
    }
}

function animPercent() {
    var htmlpercent = document.querySelector("#competence > div:nth-child(2) > div > div.pourcentage");
    var csspercent = document.querySelector("#competence > div:nth-child(3) > div > div.pourcentage");
    var jspercent = document.querySelector("#competence > div:nth-child(4) > div > div.pourcentage");
    var javapercent = document.querySelector("#competence > div:nth-child(5) > div > div.pourcentage");
    var reactpercent = document.querySelector("#competence > div:nth-child(6) > div > div.pourcentage");
    var mysqlpercent = document.querySelector("#competence > div:nth-child(7) > div > div.pourcentage");

    var spanNumber = [htmlpercent, csspercent, jspercent, javapercent, reactpercent, mysqlpercent];
    var spanpourcentage = [90, 80, 70, 40, 50, 50];

    for (let i = 0; i < spanNumber.length; i++) {
        countdown(spanNumber[i], spanpourcentage[i])
    }
}

function countdown(elem, size) {
    var cpt = 5; //Initialisation du compteur
    var duree = 4.7; // Durée en seconde
    var delta = Math.ceil((duree * 600) / size); // Durée d'un %
    function setTest() {
        progress();
    }
    function progress() {
        elem.textContent = cpt + "%";
        ++cpt;
        if (cpt <= size) { //relance compteur
            setTimeout(function () {
                setTest()
            }, delta)//delay = delta différent pour chaque i
        }
    }
    progress();
}

ReactDOM.render(<App />, document.getElementById('root'));
