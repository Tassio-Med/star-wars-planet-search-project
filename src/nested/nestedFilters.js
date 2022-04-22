/* const {
  column,
  comparision,
  value,
} = numberToFilter[0] || '';
*/

const nestedFilters = (data, numberToFilter) => {
  let elementsFilter = data;
  numberToFilter.forEach((each) => {
    const {
      column,
      comparision,
      value,
    } = each;

    elementsFilter = elementsFilter.filter((filteredByNumber) => {
      if (value || value === 0) {
        if (comparision.includes('maior')) {
          return filteredByNumber[column] > +value;
        }
        if (comparision.includes('menor')) {
          return filteredByNumber[column] < +value;
        }
        return filteredByNumber[column] === value;
      }
      return filteredByNumber;
    });
  });
  return elementsFilter;
};

export default nestedFilters;
