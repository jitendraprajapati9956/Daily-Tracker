<<<<<<< HEAD
export const getTodayKey = () => {
  return new Date().toISOString().split("T")[0];
};

export const saveDayStatus = (data) => {
  const today = getTodayKey();
  const allDays = JSON.parse(localStorage.getItem("spiritualData")) || {};

  allDays[today] = data;

  localStorage.setItem("spiritualData", JSON.stringify(allDays));
};

export const getAllDays = () => {
  return JSON.parse(localStorage.getItem("spiritualData")) || {};
};

export const isPerfectDay = (day) => {
  return day?.jap && day?.reading && day?.prayer;
};
=======
export const getTodayKey = () => {
  return new Date().toISOString().split("T")[0];
};

export const saveDayStatus = (data) => {
  const today = getTodayKey();
  const allDays = JSON.parse(localStorage.getItem("spiritualData")) || {};

  allDays[today] = data;

  localStorage.setItem("spiritualData", JSON.stringify(allDays));
};

export const getAllDays = () => {
  return JSON.parse(localStorage.getItem("spiritualData")) || {};
};

export const isPerfectDay = (day) => {
  return day?.jap && day?.reading && day?.prayer;
};
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
