function sumar6() {
    const $total = document.getElementById('sumaVista6');
    var subtotal = 0;
    [...document.getElementsByClassName("monto6")].forEach(function (element) {
        if (element.value !== '') {
            subtotal += parseFloat(element.value);
        }
    });
    $total.value = subtotal;
}


function showCel() {
    element = document.getElementById("propcel1");
    element1 = document.getElementById("propcel2");
    check = document.getElementById("celsi");
    if (check.checked) {
        element.style.display = 'block';
        element1.style.display = 'block';
    }
}

function hideCel() {
    element = document.getElementById("propcel1");
    element2 = document.getElementById("propcel2");
    check = document.getElementById("celno");
    if (check.checked) {
        element.style.display = 'none';
        element2.style.display = 'none';
    }
}


function showContent3() {
    element1 = document.getElementById("operacion1");
    element2 = document.getElementById("operacion2");
    element2 = document.getElementById("operacion3");
    check = document.getElementById("checkShow3");
    if (check.checked) {
        element1.style.display = 'block';
        element2.style.display = 'block';
        element3.style.display = 'block';
    }
}

function hideContent3() {
    element1 = document.getElementById("operacion1");
    element2 = document.getElementById("operacion2");
    element2 = document.getElementById("operacion3");
    check = document.getElementById("checkHide3");
    if (check.checked) {
        element1.style.display = 'none';
        element2.style.display = 'none';
        element3.style.display = 'none';
    }
}

function showContent4() {
    element1 = document.getElementById("operacion1");
    element2 = document.getElementById("operacion2");
    element2 = document.getElementById("operacion3");
    check = document.getElementById("checkShow4");
    if (check.checked) {
        element1.style.display = 'block';
        element2.style.display = 'block';
        element3.style.display = 'block';
    }
}

function hideContent4() {
    element1 = document.getElementById("operacion1");
    element2 = document.getElementById("operacion2");
    element2 = document.getElementById("operacion3");
    check = document.getElementById("checkHide4");
    if (check.checked) {
        element1.style.display = 'none';
        element2.style.display = 'none';
        element3.style.display = 'none';
    }
}