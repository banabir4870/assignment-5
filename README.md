Here are the answers of the question given in readme:

Question-1: What is the difference between var, let, and const?

Answer-1: Var, let and const all of them are used for declaring variables in JavaScript. Here are the key differences between them:
          1. Var is Function-Scoped while let and const are block-scoped.
          2. You can re-assign var and let but not const.
          3. Var is hoist with undefined value, while let and const hoist but with temporal dead zone which is not accessible before declaration.

Question-2: What is the spread operator (...)?

Answer-2: Spread operator is a very powerful syntax in JavaScript. It allows an iterable to be expanded into individual elements. Suppose you have an array like const b = [1, 2, 3, 4] and another array like const c = [4, 5, 5] now you can easily combine them and create a new array using spread operator like const d = [...b, ...c] and the output will [1, 2, 3, 4, 5, 6].

Question-3: What is the difference between map(), filter(), and forEach()?

Answer-3: map(), filter() and forEach() all of the methods are used for working with arrays. Here are the difference between them:
          1. We use map() when we want to create a new array from an existing array by transforming every elements of it.
          2. filter() is used often to select some elements based on some conditions. It returns an array. We usually use it to filtering out some useful arrays which match our conditions.
          3. forEach() is simply a kind of loop. It execute all the elements of an array. But it doesn't return any array. But we can modify or make HTML's with existing array using forEach.

Question-4: What is an arrow function?

Answer-4: Arrow function is simply a very sorter function writing syntax updated in ES6. We can easily write a function in one line and it returns automatically when using conditions  in a line. But if the function has multiple statements then we need to use return.

Question-5: What are template literals?

Answer-5: Template literals in JS are a way to create strings with backticks instead of single or double quotes. In single or double quotes we are available to write in a line. And we can't use any variable. But with template literals we can write multi line strings, use variable. Template literals make strings more readable and dynamic.