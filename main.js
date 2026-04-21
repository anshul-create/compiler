import { tokenizer } from "./tokenizer.js";
import { parser } from "./parser.js";

const code = "(3 + 5) * 2";

try {
  const tokens = tokenizer(code);
  console.log("Tokens generated", tokens);

  const ast = parser(tokens);

  console.log(JSON.stringify(ast, null, 2));
} catch (error) {
  console.log("Parsing Error", error.message);
}
