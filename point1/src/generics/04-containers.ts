function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len('123');
len(['asdasd']);
