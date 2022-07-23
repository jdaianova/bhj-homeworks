let url = "https://netology-slow-rest.herokuapp.com/poll.php";
const pollTitle = document.querySelector("#poll__title");
const pollAnswers = document.querySelector("#poll__answers");

let request = new XMLHttpRequest();
request.open("GET", url);
request.send();
request.onload = () => {
  var data = JSON.parse(request.responseText);
  console.log(data);

  pollTitle.innerHTML = data.data.title;
  const answers = data.data.answers;
  answers.forEach((element) => {
    const answer = document.createElement("button");
    pollAnswers.appendChild(answer);
    answer.classList.add("poll__answer");
    answer.innerHTML = element;
    answer.addEventListener("click", () => {
      alert("Спасибо, ваш вопрос засчитан!");
      window.location.reload();
    });
  });
};
