const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/calculate" method="post">
      <input type="number" name="num1" placeholder="Число 1" required>
      <select name="operator">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" name="num2" placeholder="Число 2" required>
      <button type="submit">Порахувати</button>
    </form>
  `);
});

app.post('/calculate', (req, res) => {
  const { num1, operator, num2 } = req.body;

  let result;
  switch (operator) {
    case 'add':
      result = Number(num1) + Number(num2);
      break;
    case 'subtract':
      result = Number(num1) - Number(num2);
      break;
    case 'multiply':
      result = Number(num1) * Number(num2);
      break;
    case 'divide':
      result = Number(num1) / Number(num2);
      break;
    default:
      result = 'Невідома операція';
  }

  res.send(`Результат: ${result}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
