let vowels = ["a", "e", "i", "o", "u"];
let letters =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
for (let i = letters.length - 1; i > 0; i--) {
  let characterI = letters.charAt(i);
  console.log(characterI);
  if (vowels.includes(characterI)) {
    console.log(`Found the vowel ${characterI} in index ${i}`);
    break;
  }
}
