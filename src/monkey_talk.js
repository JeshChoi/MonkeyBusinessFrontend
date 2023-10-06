const bananaTalkMap = {
    'a': ['🍌', 'AHAH'],
    'b': ['🌴', 'ooOOOO'],
    'c': ['🏝️', 'ekkkk'],
    'd': ['🍍', 'eEEEe'],
    'e': ['🍌', ' AhH '],
    'f': ['🍌', 'AAAa'],
    'g': ['🐒', ' ooh'],
    'h': ['🐵', ' e'],
    'i': ['🦍', 'iiE '],
    'j': ['🏖️', 'aa a '],
    'k': ['🍈', 'oo oo '],
    'l': ['🍌', ' ee 🍌'],
    'm': ['🚽', 'mmmAA'],
    'n': ['🍌', ' eeee e '],
    'o': ['🍌', ' ooH'],
    'p': ['🍌', ' pee pee '],
    'q': ['🍌', ' aa a'],
    'r': ['🚽', 'AA'],
    's': ['🍉', 'OOOEE'],
    't': ['💩', ' EEE '],
    'u': ['💩', 'A A '],
    'v': ['🍑', 'oooOoo '],
    'w': ['💩', 'ee '],
    'x': ['💩', 'AAAA'],
    'y': ['💩', 'ooo 🍌'],
    'z': ['📮', 'zzzZZz'],
    '.': ['ooo ', 'pop'],
    ',': ['eee', 'chip'],
    '!': ['aaa', 'BOOM'],
    '?': [' oo ', 'huh'],
    "'": ['eee e', 'tick'],
    '"': [' a aa', 'clack'],
    ':': ['ooe', 'ding'],
    ';': ['ee', 'ring'],
  };
  
export function toBananaTalk(input, type = 'emoji') {
    let output = '';
    if(type === 'human') return input;
    for (let char of input.toLowerCase()) {
      if (bananaTalkMap[char]) {
        if (type === 'emoji') {
          output += bananaTalkMap[char][0];
        } else if (type === 'sound') {
          output += bananaTalkMap[char][1];
        } else if (type === 'both') {
          output += bananaTalkMap[char][Math.random() < 0.6 ? 1 : 0];
        }
      } else {
        output += char;
      }
    }
    
    return output;
  }
  
  console.log(toBananaTalk("Hello World!", 'emoji')); // Output: 🐵🍋🍋🍉 🍎🍉🍋🐚🍋🐒🟠
  console.log(toBananaTalk("Hello World!", 'sound')); // Output: hahEEEsss rrrsss uuurrrggrrBOOM
  console.log(toBananaTalk("Hello World!", 'both'));  // Output: Mixed emoji and sound representation
  