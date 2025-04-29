// Helper function to calculate time together
export function calculateTimeTogether(startDate: Date) {
  const currentDate = new Date();
  
  // Calculate years, months, and days
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();
  
  // Adjust for negative days (borrow from months)
  if (days < 0) {
    months--;
    // Get the number of days in the previous month
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += prevMonth;
  }
  
  // Adjust for negative months (borrow from years)
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months, days };
}

// Helper function to format date as string
export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long', 
    year: 'numeric'
  });
}
