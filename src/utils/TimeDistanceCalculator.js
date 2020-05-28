function addZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

function getDistanceDays(time) {
  return addZero(parseInt(time / (1000 * 60 * 60 * 24)));
}

export function getDistanceFromAdmissionDay(year) {
  const admissionDate = new Date(parseInt("20" + year), 2, 1);
  const distance = getDistanceDays(new Date() - admissionDate);
  return distance;
}

export function getDistancesFromToday(time) {
  const distances = {
    days: getDistanceDays(time),
    hours: addZero(parseInt((time / (1000 * 60 * 60)) % 24)),
    minutes: addZero(parseInt((time / (1000 * 60)) % 60)),
    seconds: addZero(parseInt((time / 1000) % 60)),
  };
  return distances;
}
