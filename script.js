// Danh sách câu hỏi Listening
const listeningQuiz = [
  {
    audioSrc: "./sound_b.mp3", // Đường dẫn đến file audio
    question: "What is the main topic of the audio?",
    options: ["Global warming", "Climate change", "Pollution"],
    correctAnswer: 0, // Đáp án đúng là A
  },
  {
    audioSrc: "./sound_b.mp3", // File audio khác
    question: "What does the speaker say about climate change?",
    options: ["It's a myth", "It's a serious issue", "It's a seasonal change"],
    correctAnswer: 1,
  },
];

let currentListeningIndex = 0;

// Hiển thị câu hỏi Listening
const displayListeningQuestion = () => {
  const listeningQuestionEl = document.getElementById("listening-question");
  const listeningOptionsEl = document.getElementById("listening-options");
  const audioEl = document.getElementById("audio");

  const { audioSrc, question, options } = listeningQuiz[currentListeningIndex];

  // Cập nhật file audio
  audioEl.src = audioSrc;

  // Hiển thị câu hỏi
  listeningQuestionEl.textContent = question;
  listeningOptionsEl.innerHTML = "";

  // Tạo các nút lựa chọn đáp án
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.onclick = () => checkListeningAnswer(index);
    listeningOptionsEl.appendChild(button);
  });
};

// Kiểm tra đáp án Listening
const checkListeningAnswer = (index) => {
  const listeningResultEl = document.getElementById("listening-result");
  const correctAnswer = listeningQuiz[currentListeningIndex].correctAnswer;

  if (index === correctAnswer) {
    listeningResultEl.textContent = "Chính xác! Bạn đã trả lời đúng.";
  } else {
    listeningResultEl.textContent = "Sai rồi! Hãy thử lại.";
  }
};

// Khởi tạo bài tập Listening
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("listening-question")) {
    displayListeningQuestion();
  }
});
