export function findByTag (tagName: string) {
  return (Array.from(document.querySelectorAll(tagName)) as HTMLElement[])
    .filter(Boolean)
}

export function findById (id: string) {
  return [document.getElementById(id)]
    .filter(<T> (element: T): element is NonNullable<T> => Boolean(element))
}

export function findByClasses (classNames: string[]) {
  return classNames
    .flatMap((name) => Array.from(document.getElementsByClassName(name)) as HTMLElement[])
    .filter(Boolean)
}
