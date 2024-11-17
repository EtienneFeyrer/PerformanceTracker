// src/utility/dateValidation.js

// Correctly export the validateDate function
export const validateDate = (date) => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Months are zero-based, so add 1
    const currentYear = today.getFullYear();

    const entryDateObj = new Date(date);
    const entryMonth = entryDateObj.getMonth() + 1;
    const entryYear = entryDateObj.getFullYear();

    if (entryYear > currentYear || (entryYear === currentYear && entryMonth > currentMonth)) {
        return "Please select a valid date";
    }

    if (entryYear < currentYear || (entryYear === currentYear && entryMonth < currentMonth)) {
        return "Date is not in this month";
    }

    return "Valid date";
};
