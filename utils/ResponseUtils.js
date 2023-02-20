
const methods = {
    res: (res, output) => {
        res.statusCode = output?.statusCode || 500;
        return res.json({
            message: output?.message,
            err: output?.errorStatus,
            data: output?.data
        });
    }
}

module.exports = {
    ...methods,
}