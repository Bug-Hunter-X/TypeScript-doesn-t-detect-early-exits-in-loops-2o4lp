While TypeScript can't directly detect this type of early exit, we can improve the code's clarity and make the intent more explicit:

```typescript
function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) break; // Use a more explicit 'break' statement
  }
}

function printNumbers1(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i > 3) break;
    console.log(i);
  }
}

printNumbers(5);
printNumbers1(5);
```

Using a `break` statement clearly indicates the loop's early termination. 
Alternatively, restructuring the loop condition, as shown in the second function, enhances readability. Although TypeScript still doesn't produce a warning, the code becomes self-documenting and easier to understand.  The main issue is that TypeScript's static analysis cannot fully track all possible runtime program flows.