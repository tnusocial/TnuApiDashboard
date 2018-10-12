module.exports = {
    index: function (req, res) {
        console.log(req.body);
        res.send("OK!");
    }
};
