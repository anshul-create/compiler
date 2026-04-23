import { tokenizer } from "./tokenizer.js";
import { parser } from "./parser.js";

const code = "(3+5)*2";

try {
  const tokens = tokenizer(code);
  console.log('tokens');
  console.log(tokens);

  const ast = parser(tokens);

  console.log("\nast :");
  console.log(JSON.stringify(ast, null, 2));
} catch (error) {
  console.log("Parsing Error", error.message);
}
