export const calculateRemainingTime = (otpExpirationTime) => {
    const expirationTime = new Date(`1970-01-01T${otpExpirationTime}`).getTime(); // Convert to milliseconds
    const currentTime = new Date().getTime();
    const remainingTime = Math.floor((expirationTime - currentTime) / 1000); // Remaining time in seconds
    return remainingTime > 0 ? remainingTime : 0;
};

