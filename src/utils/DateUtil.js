import moment from "moment";

export function ecomTxnDisplayFormat(dateInput) {
  if (dateInput === undefined || dateInput === null) return "";
  try {
    return moment(dateInput).format("lll");
  } catch (err) {
    console.log("Error in formatting txn date", err);
    return "";
  }
}
