// Load habits when page starts
window.onload = function() {
  loadHabits();
  updateProgress();
};

function addHabit() {
  let habit = document.getElementById("habitInput").value;
  if (habit.trim() === "") return; // prevent empty habits

  let list = document.getElementById("habitList");
  let item = document.createElement("li");
  item.textContent = habit;

  item.addEventListener("click", function() {
    item.classList.toggle("completed");
    saveHabits();
    updateProgress();
  });

  list.appendChild(item);
  document.getElementById("habitInput").value = "";
  saveHabits();
  updateProgress();
}

// Save habits to localStorage
function saveHabits() {
  let habits = [];
  document.querySelectorAll("#habitList li").forEach(item => {
    habits.push({
      text: item.textContent,
      completed: item.classList.contains("completed")
    });
  });
  localStorage.setItem("habits", JSON.stringify(habits));
}

// Load habits from localStorage
function loadHabits() {
  let saved = JSON.parse(localStorage.getItem("habits")) || [];
  let list = document.getElementById("habitList");

  saved.forEach(habit => {
    let item = document.createElement("li");
    item.textContent = habit.text;
    if (habit.completed) item.classList.add("completed");

    item.addEventListener("click", function() {
      item.classList.toggle("completed");
      saveHabits();
      updateProgress();
    });

    list.appendChild(item);
  });
}
