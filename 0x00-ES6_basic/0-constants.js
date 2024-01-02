export function taskFirst() {
  const task = 'Je préfère const quand je le peux.';
  return task;
}

export function getLast() {
  return ' est correct';
}

export function taskNext() {
  let combination = 'Mais parfois let';
  combination += getLast();

  return combination;
}
