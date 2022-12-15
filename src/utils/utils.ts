const ROUTER = {
  blog: '/blog/',
  inDev: '/in-develop/',
}

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const getMonthName = (month: number) : string => months[month-1];

const getMinName = (min: number) : string => {
  if (min >= 5 && min <= 20) return 'минут';
  if (min % 10 == 1) return 'минута';
  return (min % 10 < 5 && min % 10 > 1) ? 'минуты' : 'минут';
}

const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

const cleanText = (strInputCode : string) => strInputCode.replace(/<\/?[^>]+(>|$)/g, "")

export {cls, cleanText, getMinName, getMonthName, ROUTER};