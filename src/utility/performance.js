import { UserPerformance } from "../constants";

export const getPerformance = (StudentId, returnData) => {
    const currentMonth = new Date().getMonth();
    const matchingEntries = returnData.filter(mileage => mileage.Student_ID === StudentId && new Date(mileage.ENTRY_Date).getMonth() === currentMonth);

    if (matchingEntries.length > 0) {
        const totalMileage = matchingEntries.reduce((sum, entry) => sum + entry.Mileage, 0);
        return totalMileage;
    } else {
        return "No entries found for this month!";
    }
};

export const getID= (Username, studentData) => {
    console.log("Username:", Username);
    console.log("StudentData:", studentData);
    const foundUser = studentData.find(user => user.username === Username);
        if(foundUser){
            return foundUser.StudentId;
        }    
        else{
            return "No entry found!"
    }
}


export const getPerformanceToday = (StudentId, DailyMileage) => {
    console.log("DailyMileage", DailyMileage)
    const today = new Date().toISOString().split('T')[0]; 
    // Get today's date in YYYY-MM-DD format
    console.log("Today:", today);
    const entriesForToday = DailyMileage.filter(entry => entry.Entry_Date.split('T')[0] === today);

    if (entriesForToday.length === 0) {
        return "No entry found";
    } else if (entriesForToday.length > 1) {
        return "Wait until Daily Mileage is updated";
    } else {
        const firstentry = entriesForToday[0];
        console.log("StudentId:", StudentId);
        console.log("firstentry:", firstentry);
        console.log("firstentry.Student_ID:", firstentry.Student_ID);
        return firstentry.Mileage;
    }
}

export const getPerformanceMonth = (studentId, monthlyMileage) => {
    console.log("MonthlyMileage:", monthlyMileage);
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Months are zero-based, so add 1

    // Function to check if the entry date is in the current month
    const isCurrentMonth = (entryDate) => {
        const entryMonth = new Date(entryDate).getMonth() + 2;
        // console.log(`Entry Date: ${entryDate}, Entry Month: ${entryMonth}, Is Current Month: ${entryMonth === currentMonth}`);
        return entryMonth === currentMonth;
    };

    const entriesForMonth = monthlyMileage.filter(entry => {
        const isCurrent = isCurrentMonth(entry.ENTRY_Date);
        const isStudentMatch = entry.Student_ID === studentId;
        //console.log("Entry Date:", entry.ENTRY_Date);
        //console.log("Is it the current month:", isCurrent);
        //console.log("Student ID matches:", isStudentMatch);
        return isCurrent && isStudentMatch;
    });

    if (entriesForMonth.length === 0) {
        return "No entry found";
    } else if (entriesForMonth.length > 1) {
        return "Wait until Monthly Mileage is updated";
    } else {
        const firstEntry = entriesForMonth[0];
        //console.log("StudentId (Monthly):", studentId);
        //console.log("First Entry (Monthly):", firstEntry);
        //console.log("First Entry Student ID (Monthly):", firstEntry.Student_ID);
        return firstEntry.Mileage;
    }
};

export const getSpot = (Student_ID, TotalMileage) => {const matchingEntries = TotalMileage.filter(mileage => mileage.Student_ID === Student_ID);
if(matchingEntries.length > 1){
    return 'Wait until Ranked List is updated';
}
else if( matchingEntries.length === 1){
    return matchingEntries[0].Rank;
}
else{
    return "No entry found for this month!";
}
}
