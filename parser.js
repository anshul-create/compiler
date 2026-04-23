export function parser(tokensInput) {
  let tokens = tokensInput;
  let i = 0;

  function peek() {
    return tokens[i];
  }

  function consume() {
    return tokens[i++];
  }

  // Primary → numbers and (expression)
  function parsePrimary() {
    const token = consume();

    if (!token) {
      throw new Error("Unexpected end of input");
    }

    if (token.type === "NUMBER") {
      return { type: "NumberLiteral", value: token.value };
    }

    if (token.type === "LEFTPARENTHESIS") {
      const expr = parseExpression();

      if (!peek() || peek().type !== "RIGHTPARENTHESIS") {
        throw new Error("Expected ')'");
      }

      consume(); // consume ')'
      return expr;
    }

    throw new Error("Unexpected token: " + token.type);
  }

  // Term → *, /
  function parseTerm() {
    let left = parsePrimary();

    while (peek() && ["STAR", "SLASH"].includes(peek().type)) {
      const operator = consume();
      const right = parsePrimary();

      left = {
        type: "BinaryExpression",
        operator: operator.type,
        left,
        right,
      };
    }

    return left;
  }

  // Expression → +, -
  function parseExpression() {
    let left = parseTerm();

    while (peek() && ["PLUS", "MINUS"].includes(peek().type)) {
      const operator = consume();
      const right = parseTerm();

      left = {
        type: "BinaryExpression",
        operator: operator.type,
        left,
        right,
      };
    }

    return left;
  }

  const ast = parseExpression();

  if (i < tokens.length) {
    throw new Error("Unexpected tokens at end");
  }

  return ast;
}
