'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);
  return bytes.reduce((result, byte) => (result << 8) + byte, 0);
};

console.log(ipToInt());
console.log(ipToInt('24.1.0.4'));
console.log(ipToInt('135.8967.1.177'));
console.log(ipToInt('333.152.144.888'));
console.log(ipToInt('0.0.0.0'));
console.log(ipToInt('5.5.5.5'));
