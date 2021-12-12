export const searchClose = (str, pos, stack) => {
  const textLength = str.length;
  const prevPos = pos - 1;
  const currentLetter = str[pos];
  const prevLetter = textLength > 1 ? str[prevPos] : '';
  const REST = textLength - pos;

  if(prevLetter !== ":" && currentLetter === '(') throw "FAIL";  
  if(currentLetter === ')') {
    if(prevLetter !== ":") return REST;
    if(stack > 0 ){
      const prevText = str.slice(-3-REST, -1-REST);
      if(prevText.match(/(\)\s)|(\s+)|(.?\)|\s)/gi) == null) return REST;
    }
  }
  if(pos <= 0) return null;

  return searchClose(str, prevPos);
  };