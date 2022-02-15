export function evaluate(board: string[], symbol: string) {
  const lines = [
    [0, 1, 2], // h.h0
    [3, 4, 5], // h.h1
    [6, 7, 8], // h.h2
    [0, 3, 6], // v.v0
    [1, 4, 7], // v.v1
    [2, 5, 8], // v.v2
    [0, 4, 8], // d.d0
    [2, 4, 6], // d.d1
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (board[a] !== " " && board[a] === board[b] && board[a] === board[c]) {
      if (board[a] === symbol) {
        return 10;
      }
      return -10;
    }
  }

  return 0;
}
