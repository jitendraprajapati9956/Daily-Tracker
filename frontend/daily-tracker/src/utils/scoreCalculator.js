export const calculateScore = (form) => {
  return (
    (form.satsang ? 1 : 0) +
    (form.seva ? 1 : 0) +
    (form.study ? 1 : 0) +
    (form.noFap ? 1 : 0) +
    (form.exercise ? 1 : 0) +
    (form.mala >= 5 ? 1 : 0)
  );
  if (tracker.morningJapCompleted) score += 5;
if (tracker.miniJapCount > 0) score += 2;

};
