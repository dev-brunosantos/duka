const app = require("./app");

const port = 3000;
const url = `http://localhost:${port}`;

app.listen(port, ()=>console.log(`Servidor rodando em ${url} `));