import { format } from "date-fns";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const getDateFull = (date) => {
  return format(new Date(date), "MMMM dd, yyyy");
};

export const getDateShort = (date) => {
  return format(new Date(date), "y-MM-dd");
};

export const shortString = (str, maxLength = 20) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

export const getDateWithTime = (date) => {
  return format(new Date(date), "MMMM dd, yyyy hh:mm a");
};
