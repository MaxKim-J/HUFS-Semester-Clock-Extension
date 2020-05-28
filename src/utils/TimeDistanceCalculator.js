export function getDistanceFromAdmissionDay(year) {
  const admissionDate = new Date(parseInt("20" + year), 2, 1);
  const distance = getDistanceDays(new Date() - admissionDate);
  return distance;
}

export function getDistanceSeconds(time) {
  return addZero(parseInt((time / 1000) % 60));
}

export function getDistanceMinutes(time) {
  return addZero(parseInt((time / (1000 * 60)) % 60));
}

export function getDistanceHours(time) {
  return addZero(parseInt((time / (1000 * 60 * 60)) % 24));
}

export function getDistanceDays(time) {
  return addZero(parseInt(time / (1000 * 60 * 60 * 24)));
}

function addZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}
