function dateObj(date) {
    const [day, month, year] = date.split("/");
    return new Date(`${year}-${month}-${day}`);
}

export { dateObj };