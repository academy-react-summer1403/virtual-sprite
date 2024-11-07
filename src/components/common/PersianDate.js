const ConvertToPersianDate = (datee) => {
  const date = new Date(datee); 
  if (isNaN(date)) return "تاریخ نامعتبر است"; 

  return new Intl.DateTimeFormat("fa-IR").format(date);
};
export default ConvertToPersianDate;
