function duplicateEncode(inputText){
  var text = inputText.toLowerCase();
  var output = [];
  var wordType;
  for(let i=0; i<text.length; i++){
    wordType = 1;
    for(let j=0; j<text.length; j++){
      if(i!=j){
        if(text[i] == text[j]){
          output.push(')');
          wordType = 2;
          break;
        }   
      }
    }
    if(wordType == 1){
      output.push('(');
    }
  }
  return output.join('');
}
