export const calculateStreak = (data) => {
  let streak = 0;

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].score >= 4) streak++;
    else break;
  }

  return streak;
};
