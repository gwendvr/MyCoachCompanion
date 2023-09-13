var Response1, Response3, Response4, Response5, Response6, Response7, Response71, Response8, Response10, Response11, Response121, Response122, Response123, Response123;
var Response2 = [];
var Response9 = [];
var Responses = {};
var textQ8 = ["1 - Débutant : Pour les personnes qui ont peu ou pas d'expérience en matière d'exercice physique régulier.",
    "2 - Occasionnel : Pour les personnes qui font de l'exercice de manière sporadique ou à un niveau modéré.",
    "3 - Actif : Pour les personnes qui s'engagent régulièrement dans des activités physiques et maintiennent une condition physique raisonnable.",
    "4 - Avancé : Pour les personnes qui ont une bonne condition physique et sont capables de s'entraîner à un niveau plus intense.",
    "5 - Athlétique : Pour les personnes qui ont une excellente condition physique et peuvent s'engager dans des activités physiques intenses",
    "6 - Sportif : Pour les personnes qui participent activement à des compétitions sportives ou à des entraînements spécifiques à un sport.",
    "7 - Endurant : Pour les personnes ayant une excellente endurance cardiorespiratoire et capables de s'engager dans des activités d'endurance prolongées.",
    "8 - Puissant : Pour les personnes qui ont développé une force et une puissance musculaire significatives.",
    "9 - Flexible : Pour les personnes qui ont une bonne flexibilité et une mobilité articulaire améliorée.",
    "10 - Élite : Pour les athlètes de haut niveau qui s'engagent dans des compétitions professionnelles ou de niveau supérieur."
]

var isClick = false;
var isReady = false;

$(document).ready(function () {
    if ($("#question-1").hasClass("inactif")) {
        $(".actif").removeClass("actif").addClass("inactif");
        $("#question-1").addClass("actif").removeClass("inactif");
    }

    $(".button-Q1").on("click", function () {
        Response1 = $(this).text().trim();
        console.log("Texte 1 : ", Response1);
        $(".button-Q1").css("background-color", "");
        $(this).css("background-color", "#fb6756");
        $("#btn-pass-q2").removeClass("none");
    });

    $("#btn-pass-q2").one("click", QuestionTwo);
});

function QuestionTwo() {
    $("#question-1").addClass("inactif").removeClass("actif");
    $("#question-2").removeClass("inactif").addClass("actif");

    $(".button-Q2").on("click", function () {
        isClick = !isClick

        if (!$(this).hasClass("click")) {
            isClick = true;
        } else {
            isClick = false
        }

        if (isClick) {
            Response2.push($(this).text().trim());
            console.log("Texte 2 : ", Response2);
            $(this).css("background-color", "#fb6756");
            $(this).addClass("click");
        } else {
            var indice = Response2.indexOf($(this).text().trim());

            if (indice !== -1) {
                Response2.splice(indice, 1);
                console.log(Response2);
            }
            $(this).css("background-color", "");
            $(this).removeClass("click");
        }

        $("#btn-pass-q3").removeClass("none");
    });

    $("#btn-pass-q3").on("click", QuestionThree);
}

function QuestionThree() {
    $("#question-2").addClass("inactif").removeClass("actif");
    $("#question-3").removeClass("inactif").addClass("actif");

    $(".button-Q3").on("click", function () {
        Response3 = $(this).text().trim();
        console.log("Texte 3 : ", Response3);
        $(".button-Q3").css("background-color", "");
        $(this).css("background-color", "#fb6756");
        $("#btn-pass-q4").removeClass("none");
    });

    $("#btn-pass-q4").one("click", QuestionFour);
}

function QuestionFour() {
    $("#question-3").addClass("inactif").removeClass("actif");
    $("#question-4").removeClass("inactif").addClass("actif");

    $("#slider").on("input", function () {
        var value = $(this).val();
        var labels = ["5-10 %", "10-15 %", "20-25 %", "25-30 %", "30-35 %", "35-40 %", "> 40 %"];
        Response4 = labels[value];
        $(".slider-labels label").removeClass("selected");
        $(".slider-labels label").eq(value).addClass("selected");
        console.log(Response4);

        $("#btn-pass-q5").removeClass("none");
    });

    $("#btn-pass-q5").on("click", QuestionFive);
}

function QuestionFive() {
    $("#question-4").addClass("inactif").removeClass("actif");
    $("#question-5").removeClass("inactif").addClass("actif");

    $("#btn-pass-q6").on("click", QuestionSix);
}

function QuestionSix() {
    Response5 = $("#taille").val().trim();
    if (Response5 === "") {
        window.alert("Veuillez saisir votre taille !");
    } else {
        console.log("Texte 5 : " + Response5);

        $("#question-5").addClass("inactif").removeClass("actif");
        $("#question-6").removeClass("inactif").addClass("actif");

        $("#btn-pass-q7").on("click", QuestionSeven);
    }
}

function QuestionSeven() {
    Response6 = $("#age").val().trim();
    if (Response6 === "") {
        window.alert("Veuillez saisir votre age !");
    } else {
        console.log("Texte 6 : " + Response6);

        $("#question-6").addClass("inactif").removeClass("actif");
        $("#question-7").removeClass("inactif").addClass("actif");

        $("#btn-pass-q8").on("click", QuestionHeight);
    }
}

function QuestionHeight() {
    Response7 = $("#poids").val().trim();
    Response71 = $("#poids-obj").val().trim();
    if (Response7 === "" && Response71 === "") {
        window.alert("Veuillez saisir votre poids et votre objectif !");
    } else {
        console.log("Texte 7 : " + Response7);
        console.log("Texte 7.1 : " + Response71);

        $("#question-7").addClass("inactif").removeClass("actif");
        $("#question-8").removeClass("inactif").addClass("actif");

        $("#slider-1").on("input", function () {
            var value = $(this).val();
            $(".text-infos").text(textQ8[value]);
            var labels = ["Débutant", "Occasionnel", "Actif", "Avancé", "Athlétique", "Sportif", "Endurant", "Puissant", "Fléxible", "Élite"];
            Response8 = labels[value];
            $(".slider-labels label").removeClass("selected");
            $(".slider-labels label").eq(value).addClass("selected");
            console.log(Response8);

            $("#btn-pass-q9").removeClass("none");
        });

        $("#btn-pass-q9").on("click", QuestionNine);
    }
}

function QuestionNine() {
    $("#question-8").addClass("inactif").removeClass("actif");
    $("#question-9").removeClass("inactif").addClass("actif");

    $(".button-Q9").on("click", function () {
        isClick = !isClick

        if (!$(this).hasClass("click")) {
            isClick = true;
        } else {
            isClick = false
        }

        if (isClick) {
            Response9.push($(this).text().trim());
            console.log("Texte 9 : ", Response9);
            $(this).css("background-color", "#fb6756");
            $(this).addClass("click");
        } else {
            var indice = Response9.indexOf($(this).text().trim());

            if (indice !== -1) {
                Response9.splice(indice, 1);
                console.log(Response9);
            }
            $(this).css("background-color", "");
            $(this).removeClass("click");
        }

        $("#btn-pass-q10").removeClass("none");
    });

    $("#btn-pass-q10").on("click", QuestionTen);
}

function QuestionTen() {
    $("#question-9").addClass("inactif").removeClass("actif");
    $("#question-10").removeClass("inactif").addClass("actif");

    $(".button-Q10").one("click", function () {
        Response10 = $(this).text().trim();
        console.log("Texte 10 : ", Response10);
        $(".button-Q3").css("background-color", "");
        $(this).css("background-color", "#fb6756");

        $("#btn-pass-q11").removeClass("none");
    });

    $("#btn-pass-q11").on("click", QuestionEleven);
}

function QuestionEleven() {
    $("#question-10").addClass("inactif").removeClass("actif");
    $("#question-11").removeClass("inactif").addClass("actif");

    $("#btn-pass-q12").on("click", QuestionTwelve);
}

function QuestionTwelve() {
    Response11 = $("#taille").val().trim();
    if (Response11 === "") {
        window.alert("Veuillez saisir le nombre de séances !");
    } else {
        console.log("Texte 11 : " + Response11);

        $("#question-11").addClass("inactif").removeClass("actif");
        $("#question-12").removeClass("inactif").addClass("actif");

        $("#btn-end").on("click", sendDatas);
    }
}

function sendDatas() {
    Response121 = $("#last").val().trim();
    Response122 = $("#name").val().trim();
    Response123 = $("#mail").val().trim();
    Response124 = $("#other").val().trim();
    if (Response121 === "" || Response122 === "" || Response123 === "") {
        window.alert("Veuillez remplir les cases nom, prénom, mail");
    } else {
        console.log("Texte 12.1 : " + Response121);
        console.log("Texte 12.2 : " + Response122);
        console.log("Texte 12.3 : " + Response123);
        console.log("Texte 12.4 : " + Response124);

        // Store all responses in the Responses object
        Responses.titre1 = "objectif physique";
        Responses.reponse1 = Response1;
        Responses.titre2 = "autres objectifs";
        Responses.response2 = Response2;
        Responses.titre3 = "morphologie";
        Responses.reponse3 = Response3;
        Responses.titre4 = "niveau de masse grasse";
        Responses.response4 = Response4;
        Responses.titre5 = "taille";
        Responses.response5 = Response5;
        Responses.titre6 = "age";
        Responses.response6 = Response6;
        Responses.titre7 = "poids actuel";
        Responses.response7 = Response7;
        Responses.titre8 = "poids visé";
        Responses.response8 = Response71;
        Responses.titre9 = "niveau de forme";
        Responses.response9 = Response8;
        Responses.titre10 = "sport le plus aimé";
        Responses.response10 = Response9;
        Responses.titre11 = "entrainement physiquement auparavant";
        Responses.response11 = Response10;
        Responses.titre12 = "temps hebdomadaire MCC";
        Responses.response12 = Response11;
        Responses.titre13 = "nom";
        Responses.response13 = Response121;
        Responses.titre14 = "prénom";
        Responses.response14 = Response122;
        Responses.titre15 = "mail";
        Responses.response15 = Response123;
        Responses.titre16 = "commentaire";
        Responses.response16 = Response124;

        // Convert the Responses object to JSON format
        var jsonData = JSON.stringify(Responses);

        // Create a Blob object for the JSON data
        var blob = new Blob([jsonData], { type: 'application/json' });

        // Create a URL for the Blob
        var url = URL.createObjectURL(blob);

        // Create a download link for the JSON file
        var a = document.createElement('a');
        a.href = url;
        a.download = 'responses.json';
        a.textContent = 'Download JSON';

        // Append the link to the document
        document.body.appendChild(a);
    }
}