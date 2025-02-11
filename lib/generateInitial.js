export default function generateInitials(name = "") {
  const words = name.split(" ");
  // let firstInitial = "";
  // let secondInitial = "";

  let firstInitial = words[0][0].toUpperCase();

  let secondInitial = "";
  if (words?.length > 1) {
    secondInitial = words[1][0].toUpperCase();
  }
  //these are both acceptable logics

  // for (const word of words) {
  //   if (word.length > 0) {
  //     firstInitial += word[0].toUpperCase();
  //   }
  // }
  // if (words.length > 1) {
  //   secondInitial = words[words.length - 1][0].toUpperCase();
  // }
  return firstInitial + secondInitial;
}
