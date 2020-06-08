const snarkyQuotes = (req ,res , next) => {
    const randomNUM = Math.ceil(Math.random() * 10)
    let quote = ''
    switch (randomNUM) {
        case 1:
            quote = "Light travels faster than sound. This is why some people appear bright until they speak.” – Steven Wright";
          break;
        case 2:
            quote = "When people ask me stupid questions, it is my legal obligation to give a sarcastic remark";
          break;
        case 3:
            quote = "It’s okay if you don’t like me. Not everyone has good taste.";
          break;
        case 4:
            quote = "You look good when your eyes are closed, but you look the best when my eyes closed.";
          break;
        case 5:
            quote = "Mirrors can’t talk, lucky for you they can’t laugh either";
          break;
        case 6:
            quote = "If had a dollar for every smart thing you say. I’ll be poor.";
          break;
        case 7:
            quote = "Everyone seems normal until you get to know them.";
            break;
        case 8:
            quote = "I’m sorry I hurt your feelings when I called you stupid. I really thought you already knew.";
             break;
        case 9:
            quote = "Sarcasm: because arguing with stupid people just wouldn’t be as much fun.";
            break;
        case 10:
            quote = "Sarcasm is the secret language that everyone uses when they want to say something mean to your face.";
            break;
  }
  console.log(quote)
  next()
}
module.exports = snarkyQuotes