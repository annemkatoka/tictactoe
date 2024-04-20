var flag = 1; //Turno de X

// Función llamada cada vez que el usuario hace click en cualquier casita
function myfunc() {
  // Setting DOM to all boxes or input field
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1");
  b2 = document.getElementById("b2");
  b3 = document.getElementById("b3");
  b4 = document.getElementById("b4");
  b5 = document.getElementById("b5");
  b6 = document.getElementById("b6");
  b7 = document.getElementById("b7");
  b8 = document.getElementById("b8");
  b9 = document.getElementById("b9");

  if (b1.value !== "") {
    if (b1.value === b2.value && b1.value === b3.value) {
      console.log("Ganó ", b1.value);
      b4.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b7.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b1.style.backgroundColor = "red";
      b2.style.backgroundColor = "red";
      b3.style.backgroundColor = "red";
    } else if (b1.value === b4.value && b1.value === b7.value) {
      console.log("Ganó ", b1.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b1.style.backgroundColor = "red";
      b4.style.backgroundColor = "red";
      b7.style.backgroundColor = "red";
    } else if (b1.value === b5.value && b1.value === b9.value) {
      console.log("Ganó ", b1.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b1.style.backgroundColor = "red";
      b5.style.backgroundColor = "red";
      b9.style.backgroundColor = "red";
    }
  }
  if (b2.value !== "") {
    if (b2.value === b5.value && b2.value === b8.value) {
      console.log("Ganó ", b2.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b2.style.backgroundColor = "red";
      b5.style.backgroundColor = "red";
      b8.style.backgroundColor = "red";
    }
  }
  if (b3.value !== "") {
    if (b3.value === b5.value && b3.value === b7.value) {
      console.log("Ganó ", b3.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b3.style.backgroundColor = "red";
      b5.style.backgroundColor = "red";
      b7.style.backgroundColor = "red";
    } else if (b3.value === b6.value && b3.value === b9.value) {
      console.log("Ganó ", b3.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b3.style.backgroundColor = "red";
      b6.style.backgroundColor = "red";
      b9.style.backgroundColor = "red";
    }
  }
  if (b4.value !== "") {
    if (b4.value === b5.value && b4.value === b6.value) {
      console.log("Ganó ", b3.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b4.style.backgroundColor = "red";
      b5.style.backgroundColor = "red";
      b6.style.backgroundColor = "red";
    }
  }
  if (b7.value !== "") {
    if (b7.value === b8.value && b7.value === b9.value) {
      console.log("Ganó ", b3.value);
      b2.disabled = true;
      b5.disabled = true;
      b6.disabled = true;
      b3.disabled = true;
      b8.disabled = true;
      b9.disabled = true;

      b7.style.backgroundColor = "red";
      b8.style.backgroundColor = "red";
      b9.style.backgroundColor = "red";
    }
  }
}

// Reseteo
function resetear() {
  location.reload();
  b1.value =
    b2.value =
    b3.value =
    b4.value =
    b5.value =
    b6.value =
    b7.value =
    b8.value =
    b9.value =
      "";
}

//Marcar cajitas
const marcarCasita_b1 = () => {
  if (flag === 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b2 = () => {
  if (flag === 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "0";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b3 = () => {
  if (flag === 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "0";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b4 = () => {
  if (flag === 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "0";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b5 = () => {
  if (flag === 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b6 = () => {
  if (flag === 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "0";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b7 = () => {
  if (flag === 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "0";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b8 = () => {
  if (flag === 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "0";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
};

const marcarCasita_b9 = () => {
  if (flag === 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").value = "0";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
};
