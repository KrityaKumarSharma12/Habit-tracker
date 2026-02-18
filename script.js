function updateProgress() {
  let habits = document.querySelectorAll("#habitList li");
  let completed = document.querySelectorAll("#habitList li.completed");
  let progress = document.getElementById("progress");

  if (habits.length === 0) {
    progress.textContent = "No habits yet!";
  } else {
    let percent = Math.round((completed.length / habits.length) * 100);
    progress.textContent = `Progress: ${completed.length}/${habits.length} habits (${percent}%)`;
  }
}

function addHabit() {
  let habit = document.getElementById("habitInput").value;
  let list = document.getElementById("habitList");
  let item = document.createElement("li");
  item.textContent = habit;

  item.addEventListener("click", function() {
    item.classList.toggle("completed");
    updateProgress();
  });

  list.appendChild(item);
  document.getElementById("habitInput").value = "";
  updateProgress();
}
