export default function appendToEachArrayValue(array, appendString) {
  const arrayEnd = [];
  for (const inx of array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return arrayEnd;
}
