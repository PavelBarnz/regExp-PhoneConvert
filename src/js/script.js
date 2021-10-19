export default function convertNumber(tel) {
  let result = tel;
  if (/^8/.test(result)) result = result.replace(/^8/, '+7');
  return result.replace(/[\s()-]/g, '');
}
