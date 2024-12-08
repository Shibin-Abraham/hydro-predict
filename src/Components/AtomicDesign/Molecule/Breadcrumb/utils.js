export const formatBreadcrumb = (value) => {
    const decodedValue = decodeURIComponent(value)
    return decodedValue
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each word
        .join(" ");
};