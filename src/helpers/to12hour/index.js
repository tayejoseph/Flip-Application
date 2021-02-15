import {extractDate} from '../index';

const to12hour = (time: string = extractDate(new Date())) => {
  const hour = Number(time.split(':')[0]);
  const minute = Number(time.split(':')[1]);
  const period = hour >= 12 ? 'PM' : 'AM';

  return `${(hour % 12 || 12) < 10 ? `0${hour % 12 || 12}` : hour % 12 || 12}:${
    minute < 10 ? `0${minute}` : minute
  } ${period}`;
};

export default to12hour;
