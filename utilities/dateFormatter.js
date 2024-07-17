function dateObj(date) {
    const [day, month, year] = date.split("/");

    return new Date(`${year}-${month}-${day}`);
}

function dateString(dateObject) {
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();

    return `${day}/${month}/${year}`;
}

export { dateObj, dateString };
