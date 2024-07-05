const successResponse = (msg) => {
    return { code: 200, data: msg };
}

const errorResponse = (error) => {
    return { code: 500, error: error };
}

export { successResponse, errorResponse };