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
