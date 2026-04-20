function tokenizer(input) {
  let tokens = [];
  let i = 0;

  while (i < input.length) {
    let char = input[i];

    if (char == " ") {
      i++;
      continue;
    }

    if (/[0-9]/.test(char)) {
      let num = "";
      while (i < input.length && /[0-9]/.test(input[i])) {
        num += input[i];
        i++;
      }
      tokens.push({ type: "NUMBER", value: Number(num) });
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      let name = "";
      while (i < input.length && /[a-zA-Z]/.test(input[i])) {
        name += input[i];
        i++;
      }
      tokens.push({ type: "IDENTIFIER", value: name });
      continue;
    }

    if (char == "+") tokens.push({ type: "PLUS" });
    else if (char === "-") tokens.push({ type: "MINUS" });
    else if (char === "*") tokens.push({ type: "STAR" });
    else if (char === "/") tokens.push({ type: "SLASH" });
    else if (char === "(") tokens.push({ type: "LEFTPARENTHESIS" });
    else if (char === ")") tokens.push({ type: "RIGHTPARENTHESIS" });
    else if (char == "=") {
      if (input[i + 1] === "=") {
        tokens.push({ type: "EQUALSEQUALS", value: "==" });
        i++;
      } else {
        tokens.push({ type: "EQUALS", value: "=" });
      }
    } else throw new Error("Invalid Character : " + char);
    i++;
  }
  return tokens;
}

const output = tokenizer(" x == 2");
console.log(output);
// console.log(/[0-9]/.test("="));
