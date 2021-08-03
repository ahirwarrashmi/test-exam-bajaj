const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
      'status':false,
      'message':'Please open /bfhl on postman'
  });
});

app.post("/bfhl", (req, res) => {
  let numbers = req.body.numbers;

  isTrue = !numbers.some(isNaN);

  let even = [];
  let odd = [];

  even = getEvenNumber(numbers);
  odd = getOddNumber(numbers);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + dd + yyyy;
  const name = "rashmi_ahirwar_" + today;

  if (isTrue) {
    res.send({
        is_success: true,
        user_id: name,
        even: even,
        odd: odd,
      });
  } else {
    res.send({
        is_success: false,
        user_id: name
      });
  }

 
});

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

function getEvenNumber(numbers) {
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (parseInt(numbers[i]) % 2 === 0) {
      // console.log(numbers[i]);
      even.push(numbers[i]);
    } else {
      // console.log("odd")
    }
  }
  return even;
}

function getOddNumber(numbers) {
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    if (Math.abs(numbers[i] % 2) == 1) {
      odd.push(numbers[i]);
    }
  }
  return odd;
}
