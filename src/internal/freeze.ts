/** Freeze reference records and nested arrays to protect subsequent lookups. */
export function freezeRecords<T extends object>(records: T[]): readonly Readonly<T>[] {
  for (const record of records) {
    for (const value of Object.values(record)) {
      if (Array.isArray(value)) Object.freeze(value);
    }
    Object.freeze(record);
  }
  return Object.freeze(records);
}
