export const calculateAge = (birthdate) => {
  // if (!birthdate) return;

  const today = new Date();
  const birthday = new Date(birthdate);

  let age = today.getFullYear() - birthday.getFullYear();

  var m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};
