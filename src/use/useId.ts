export function useId() {
  /**
   * @description GENERATE RANDOM ID
   */
  const generateId = () => Math.round(Math.random() * Date.now())

  return { id: generateId() }
}
