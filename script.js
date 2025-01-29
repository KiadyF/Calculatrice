let nombre1 = null;
let nombre2 = null;
let operateur = null;
let nombreEnregistre = null;


let boutons = document.querySelectorAll("button")
const calculatriceEcran = document.querySelector(".ecran")
let valeurBtn


function operate(nbr1, nbr2, operator) {
    nbr1 = parseFloat(nbr1)
    nbr2 = parseFloat(nbr2)
    if (operator === "/") {
        if (nbr2 === 0) {
            nbr1 = nbr2 = operateur = null
            alert("Il est impossible de diviser un nombre avec 0")
            return ""
        }
        return (nbr1 / nbr2).toPrecision(3)
    }
    else if (operator === "+") {
        return nbr1 + nbr2
    }
    else if (operator === "x") {
        return nbr1 * nbr2
    }
    else {
        return nbr1 - nbr2
    }
}

function clear() {
    nombre1 = nombre2 = operateur = null
    calculatriceEcran.textContent = ""
    nombreEnregistre = false
}



for (btn of boutons) {
    btn.addEventListener("click", function () {
        valeurBtn = this.textContent
        if (["/", "x", "+", "-", "C", "="].includes(valeurBtn)) {
            if (valeurBtn === "C") {
                clear()
            } else if (valeurBtn === "=") {
                if (nombreEnregistre) {
                    clear()
                } else {
                    nombre2 = calculatriceEcran.textContent
                    calculatriceEcran.textContent = operate(nombre1, nombre2, operateur)
                    nombre1 = null
                    nombre2 = null
                    nombreEnregistre = true
                    operateur = null
                }
            }
            else if (operateur) {
                if (nombreEnregistre) {
                    operateur = valeurBtn
                }
                else {
                    nombre2 = calculatriceEcran.textContent
                    nombre1 = operate(nombre1, nombre2, operateur)
                    nombre2 = null
                    calculatriceEcran.textContent = nombre1
                    nombreEnregistre = true
                    operateur = valeurBtn
                }
            } else {
                if (!nombre1) {
                    if (calculatriceEcran.textContent === "") {

                    } else {
                        operateur = valeurBtn
                        nombre1 = calculatriceEcran.textContent
                        nombreEnregistre = true
                    }
                }
            }
        } else {
            if (nombreEnregistre) {
                nombreEnregistre = false
                calculatriceEcran.textContent = valeurBtn
            } else {
                calculatriceEcran.textContent += valeurBtn
            }
        }
    })
}