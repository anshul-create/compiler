import { tokenizer } from "./tokenizer.js";
import { parser } from "./parser.js";
import { evaluate } from "./Interpreter.js";

const code = "(1 / ";

try{
  const tokens = tokenizer(code);
  const ast = parser(tokens);
  const result = evaluate(ast);

  console.log(result);

}catch(e){
  console.log("error : ", e.message);
}