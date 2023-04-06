function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

append(1, [12, 12, 31, 213]);
append('asd', ['asd', 'asd', 'asd', 'asd']);
