function read_passport() {
  const surname = document.getElementsByTagName('p')[2].childNodes[1].innerText;
  const name = document.getElementsByTagName('p')[3].childNodes[1].innerText;
  const year = document.getElementsByTagName('p')[5].childNodes[1].innerText;
  document.getElementById("dom_result").innerText = surname + "\n" + name + "\n" + year;
  console.log(surname, name, year);
}

document.getElementById("read").addEventListener("click", read_passport);
