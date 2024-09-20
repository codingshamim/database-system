// eslint.config.js
export default [
  {
    rules: {
      "no-unused-vars": "error", // Disallows unused variables

      // "no-console": "error", // Disallows the use of console (e.g., console.log)
      "no-debugger": "error", // Disallows the use of debugger
      eqeqeq: ["error", "always"], // Enforces strict equality (=== and !==)
      "no-redeclare": "error", // Disallows redeclaration of variables
      "no-empty": "error", // Disallows empty block statements
      "no-dupe-args": "error", // Disallows duplicate arguments in function definitions
      "no-dupe-keys": "error", // Disallows duplicate keys in object literals
      "no-func-assign": "error", // Disallows reassigning function declarations
      "no-sparse-arrays": "error", // Disallows sparse arrays (e.g., [1, , 2])
      "no-irregular-whitespace": "error", // Disallows irregular whitespace characters
      curly: "error", // Enforces consistent brace style for all control statements
      "no-eval": "error", // Disallows the use of eval()
      "no-implied-eval": "error", // Disallows implied eval() through setTimeout or setInterval
      "no-prototype-builtins": "error", // Disallows calling Object.prototype methods directly
      "no-shadow": "error", // Disallows variable declarations from shadowing variables in the outer scope
      "no-mixed-spaces-and-tabs": "error", // Disallows mixed spaces and tabs for indentation
      "no-unreachable": "error", // Disallows unreachable code after return, throw, etc.
      "no-unsafe-negation": "error", // Disallows negating the left operand of relational operators
    },
  },
];
