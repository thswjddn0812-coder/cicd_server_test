const express = require("express");
const cors = require("cors");
const dogsRouter = require("./routes/dogs.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 인덱스 라우트
app.get("/", (req, res) => {
  res.send("안녕하세요 ~~~ 서버입니다.");
});

// dogs 라우터 연결
app.use("/dogs", dogsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
