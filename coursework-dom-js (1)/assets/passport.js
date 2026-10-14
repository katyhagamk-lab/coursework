let latin = false;

function change_passport() {
  if (latin) {
    document.getElementById("surname").innerText = "Гамкрелидзе";
    document.getElementById("first_name").innerText = "Екатерина";
    document.getElementById("birth_year").innerText = "2006";
    document.getElementById("change").innerText = "Изменить на латиницу";
    latin = false;
  } else {
    document.getElementById("surname").innerText = "Gamkrelidze";
    document.getElementById("first_name").innerText = "Ekaterina";
    document.getElementById("birth_year").innerText = "MMVI";
    document.getElementById("change").innerText = "Вернуть кириллицу";
    latin = true;
  }
}

document.getElementById("change").addEventListener("click", change_passport);
