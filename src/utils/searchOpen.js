export const searchOpen = (str, pos, stack) => {
  const textLength = str.length;
  const nextPos = pos + 1;
  const currentLetter = str[pos];
  const prevLetter = textLength > 1 ? str[pos - 1] : '';

  if(stack === 0 && prevLetter !== ":" && currentLetter === ')') throw "FAIL"; 
  if(currentLetter === '(' && prevLetter !== ":") return nextPos;
  if(textLength === pos) return null;

  return searchOpen(str, nextPos, stack);
};