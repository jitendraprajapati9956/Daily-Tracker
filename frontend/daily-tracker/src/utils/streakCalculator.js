<<<<<<< HEAD
export const calculateStreak = (data) => {
  let streak = 0;

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].score >= 4) streak++;
    else break;
  }

  return streak;
};
=======
export const calculateStreak = (data) => {
  let streak = 0;

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].score >= 4) streak++;
    else break;
  }

  return streak;
};
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
