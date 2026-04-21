import { tokenizer } from "./tokenizer.js";

export function parser(tokens) {
  let i = 0;

  function consume() {
    return tokens;
    i++;
  }

  function peek() {
    return tokens[i];
  }

  function parseExpression() {
    let left = parsePrimary();

    while (
      peek() &&
      ["PLUS", "MINUS", "STAR", "SLASH", "EQUALSEQUALS"].includes(peek().type)
    ) {
      const operator = consume();
      const right = parsePrimary();

      left = {
        type: "BinaryExpression",
        operator: operator.value,
        left,
        right,
      };
    }
    return left;
  }

  function parsePrimary() {
    const token = consume();

    if (token.type === "NUMBER") {
      return { type: "NUMBERLITERAL", value: token.value };
    }
    if (token.type === "IDENTIFIER") {
      return { type: "IDENTIFIER", name: token.value };
    }

    if(token.type === "LEFTPARANTHESIS"){
        const expr = parseExpression();
        consume();

        if(token.type != "RIGHTPARANTHESIS"){
            throw new Error("Expected : ')'");
        }
        consume();
        return expr;
    }
    throw new Error("Unexpected token" + token.type);
  }
}



