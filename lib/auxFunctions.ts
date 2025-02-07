export function timeline(startYear: number) {
  const careerYear = 2015;
  const currentYear = new Date().getFullYear().valueOf();

  //   current percent

  const yearspassedCareer = currentYear - careerYear;
  const yearspassedSkill = currentYear - startYear;

  const currentPercentage = (yearspassedSkill / yearspassedCareer) * 100;
  return currentPercentage;
}
