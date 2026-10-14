function solve_task() {
  const form = document.getElementById("task_form");
  if (!form.reportValidity()) {
    document.getElementById("result").innerText = "Проверьте заполнение полей.";
    return;
  }

  const a = parseFloat(document.getElementById("a").value);
  const h = parseFloat(document.getElementById("h").value);
  const r = parseFloat(document.getElementById("r").value);
  const m = parseFloat(document.getElementById("m").value);
  if (a <= 0 || h <= 0 || r <= 0) {
    document.getElementById("result").innerText = "Размеры ёмкостей должны быть больше нуля.";
    return;
  }

  const cube = a * a * a;
  const cylinder = Math.PI * r * r * h;

  if (!Number.isFinite(cube + cylinder + m)) {
    document.getElementById("result").innerText = "Введите меньшие конечные числа.";
    return;
  }

  let first = "нельзя";
  let second = "нельзя";
  let both = "нельзя";
  if (m >= cube) {
    first = "можно";
  }
  if (m >= cylinder) {
    second = "можно";
  }
  if (m >= cube + cylinder) {
    both = "можно";
  }

  document.getElementById("result").innerText =
    "Объём куба: " + cube.toFixed(3) + " м³\n" +
    "Объём цилиндра: " + cylinder.toFixed(3) + " м³\n" +
    "Объём обеих ёмкостей: " + (cube + cylinder).toFixed(3) + " м³\n\n" +
    "Первую ёмкость заполнить " + first + ".\n" +
    "Вторую ёмкость заполнить " + second + ".\n" +
    "Обе одновременно заполнить " + both + ".";
}

document.getElementById("solve").addEventListener("click", solve_task);
