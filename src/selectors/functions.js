const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default capitalize;

// export const createComponentName = (data) => {
//   const UppercaseName = capitalize(data);
//   return <UppercaseName />
// }
