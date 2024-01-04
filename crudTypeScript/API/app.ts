import express from "express" 
import routes from "./SRC/routes"

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
  console.log('A API está rodando na porta 3000');
});