export function getRandomNumber(digitsNum: number = 3): number {
  var longNumStr: string = String(Math.random() * Math.pow(10, 10));
  return Number(longNumStr.substring(0, Number(digitsNum)));
}

export function getRandomString(): string {
  return (
    new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
  );
}


