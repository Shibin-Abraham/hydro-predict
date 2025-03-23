export const decimalNumberPattern = {
    value: /^[0-9]+(\.[0-9]+)?$/,
    message: "Only accept numbers (decimals allowed)",
  };

export const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
};

export const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Format: HH:MM
};