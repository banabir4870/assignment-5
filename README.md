Here are the answers of the question given in readme:

Question-1: What is the difference between var, let, and const?

Answer-1: Var, let and const all of them are used for declaring variables in JavaScript. Here are the key differences between them:
          1. Var is Function-Scoped while let and const are block-scoped.
          2. You can re-assign var and let but not const.
          3. Var is hoist with undefined value, while let and const hoist but with temporal dead zone which is not accessible before declaration.

Question-2: What is the spread operator (...)?

Answer-2: Spread operator is a very powerful syntax in JavaScript. It allows an iterable to be expanded into individual elements. Suppose you have an array like const b = [1, 2, 3, 4] and another array like const c = [4, 5, 5] now you can easily combine them and create a new array using spread operator like const d = [...b, ...c] and the output will [1, 2, 3, 4, 5, 6]