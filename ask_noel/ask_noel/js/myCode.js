const btn = document.querySelector("button");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

btn.addEventListener("click", () => {
  let randY = Math.floor(Math.random() * height);
  let randX = Math.floor(Math.random() * width);
  btn.style.transform = `translate(${randX}px, ${randY}px)`;
});

function agree() {
  var fullName = prompt("Vậy thì bạn đây tên là gì nhỉ?");
  var time = prompt("Tôi có thể đón bạn lúc mấy giờ? (hh:mm)");
  var answer = prompt(
    "'YES' OR 'No' - Bạn đã chắc chắn chưaa? Trả lời rồi là không có được rút lại đó nha!"
  );

  if (
    answer.search("YES") >= 0 ||
    answer.search("yes") >= 0 ||
    answer.search("Yes") >= 0
  ) {
    if (fullName == null || fullName == "") {
      alert("Bạn nhập thiếu tên rùiii :<");
    } else if (time == null || time == "") {
      alert("Bạn nhập thiếu thời gian rùiii :<");
    } else {
      alert("Mình sẽ đón bạn " + fullName + " vào lúc " + time + " nha! Tặng một bài hát này nè 🧑‍🎄");
      location.assign("https://www.youtube.com/watch?v=Q_yuO8UNGmY");
    }
  } else {
    alert("BIẾT NGAY MÀ! KHÔNG DỄ VẬY ĐÂU 😏");
  }
}
