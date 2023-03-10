export function convertParamsToTitle(string) {
  let str = string.replace("/", "");
  str = str.replaceAll("-", " ");
  let convertToArray = str.toLowerCase().split(" ");
  let result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

export const convertDate = (date) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const ArrayMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const w = weekday[new Date(date).getDay()];
  const d =
    new Date(date).getDate() < 10
      ? "0" + new Date(date).getDate()
      : new Date(date).getDate();
  const m =
    Number(new Date(date).getMonth()) + 1 < 10
      ? "0" + (Number(new Date(date).getMonth()) + 1)
      : Number(new Date(date).getMonth()) + 1;
  const y = new Date(date).getFullYear();
  const h = new Date(date).getHours();
  const mi =
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes();
  const s = new Date(date).getSeconds();
  const dateWithWeek = w + "," + " " + d + "/" + m + "/" + y;
  const dateNoWeek = d + "/" + m + "/" + y;
  const getDateInDate = new Date(date).getDate();
  const getFullYearInDate = new Date(date).getFullYear();
  const getMonthInDate = ArrayMonth[Number(new Date(date).getMonth())];
  const getDateAndMonthInDate = `${getDateInDate} ${getMonthInDate}`;
  const getFullInDate = `${getDateInDate} ${getMonthInDate} ${y}`;
  const getTimeInDate = `${h}:${mi}`;
  return {
    dateNoWeek,
    dateWithWeek,
    getDateInDate,
    getMonthInDate,
    getDateAndMonthInDate,
    getFullInDate,
    getTimeInDate,
    getFullYearInDate,
  };
};

export const getDateArray = function (start, end) {
  var arr = new Array();
  var dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  arr.push(new Date(end));
  return arr;
};

export const removeAccents = (str) => {
  str = str.toLowerCase();
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
  str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
  str = str.replace(/??|??|???|???|??/g, "i");
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
  str = str.replace(/???|??|???|???|???/g, "y");
  str = str.replace(/??/g, "d");
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
  str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
  str = str.replace(/??|??|???|???|??/g, "I");
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
  str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
  str = str.replace(/???|??|???|???|???/g, "Y");
  str = str.replace(/??/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
  // Remove extra spaces
  // B??? c??c kho???ng tr???ng li???n nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // B??? d???u c??u, k?? t??? ?????c bi???t
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replaceAll(",", "");
  str = str.replaceAll(":", "");
  str = str.replaceAll('"', "");
  str = str.replaceAll("&", "va");
  str = str.replaceAll(/\s/g, "-");
  str = str.replaceAll("-???-", "-");
  str = str.replaceAll("---", "-");
  return str.charAt(0).toLowerCase() + str.slice(1);
};


export const limitWord = (str, lim) => {
  return str.split(" ").slice(0, lim).join(" ") + " ...";
};
