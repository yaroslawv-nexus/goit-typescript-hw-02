/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum dayWeek { Monday = "work", Tuesday = "work", Wednesday = "work", Thursday = "work", Friday = "work", Saturday = "weekend", Sunday = "weekend" };


export function isWeekend(day: dayWeek): boolean {
    return dayWeek[day] !== "work" ? true : false; 
}


