export function capitalize(str) {
  return str.toUpperCase();
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = () => {
  const add = (x, y) => {
    return x + y;
  };

  const sub = (x, y) => {
    return x - y;
  };

  const mult = (x, y) => {
    return x * y;
  };

  const div = (x, y) => {
    return x / y;
  };

  return { add, sub, mult, div };
};

export const caesarCipher = (str, key) => {
  const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const encryptedABC = encryption(key, ABC);

  const arrOfStr = str.split("");
  const cipher = [];

  for (let i = 0; i < arrOfStr.length; i++) {
    let isUpperCase = false;
    if (arrOfStr[i] >= "A" && arrOfStr[i] <= "Z") {
      isUpperCase = true;
    }
    const currentChar = arrOfStr[i].toLowerCase();
    const index = ABC.indexOf(currentChar);

    if (index === -1) {
      cipher.push(arrOfStr[i]);
      continue;
    }

    if (isUpperCase) {
      cipher.push(encryptedABC[index].toUpperCase());
    } else {
      cipher.push(encryptedABC[index]);
    }
  }

  return cipher.join("");
};

function encryption(key, origABC) {
  const ABC = origABC.slice();
  for (let i = 0; i < key; i++) {
    const x = ABC.shift();
    ABC.push(x);
  }

  return ABC;
}
