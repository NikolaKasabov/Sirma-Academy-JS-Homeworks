function reverseString(string) {
  const result = string.split('').reverse().join('');
  return result;
}

function f(string) {
  const middleIndex = Math.ceil(string.length / 2);
  const firstHalf = string.slice(0, middleIndex);
  const secondHalf = string.slice(middleIndex);

  console.log(reverseString(firstHalf));
  console.log(reverseString(secondHalf));
}

f('tluciffiDsIsihTgnizamAoSsIsihT');
f('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
