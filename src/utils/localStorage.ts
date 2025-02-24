export function getLocalStorageKey<T, K>(key: string, defaultValue?: K) {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : defaultValue;
}

export function setLocalStorageKey<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}
