export const isEmpty = (stringArrayObject) => {
  const type = typeof stringArrayObject
  if (type === `string`) {
    return stringArrayObject === ``
  } else if (type === `object`) {
    return !Object.keys(stringArrayObject).length 
  } 
  return false
}





