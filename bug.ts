function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers1(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) return; // Early exit
  }
}

printNumbers1(5); // This will stop at 3, but TypeScript doesn't detect this
