import { searchOpen, searchClose } from '.';

export const getBalancedText = async (text) => {
  const BALANCED = "balanced";
  const DESBALANCED = "desbalanced";
  const t = text.trim();
  if(t.length == 0) return BALANCED;

  let stack = 0
  let start = 0;
  let end = text.length;
  let isFirst = true;
  try {
    while (start != end) {
      console.log("Params:", {start, end, stack});
      if(isFirst){
        const new_text = t.slice(start, end);
        console.log("Looking for OPEN", {new_text, length: new_text.length, start, end})
        const dif = await searchOpen(new_text, 0, stack);
        if(dif != null){
          stack++;
          start = start + dif;
        }
        isFirst = false;
      }
      else {
        const new_text = t.slice(start, end);
        console.log("Looking for CLOSE", {new_text, length: new_text.length, start, end})
        const dif = await searchClose(new_text, new_text.length -1, stack);
        if(dif != null){
          stack--;
          end = end - dif;
          isFirst = true;
        } else {
          start = end;
        }
      }
    }
    console.log("FINAL");
    if(stack > 0) return DESBALANCED;
    else return BALANCED
    
  } catch (error) {
    return DESBALANCED;
  }
};