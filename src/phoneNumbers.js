export default function phoneNumbers(number) {
  return `${number.replace(/(?<!\+)8/, '+7').replace(/[\s-()]/g, '')}`;
}
