// const { default: axios } = require("axios")

module.exports = function(req, res) {
    console.info("trigger serverless function.")

    const { name = 'World' } = req.query
    // let result = {
    //     name,
    // }

    res.redirect('http://music.app.henryhe.cn/search?keywords=' + name)

    // axios.get('http://music.app.henryhe.cn/search?keywords=' + name)
    // .then(r => {
    //     console.log(r)
    //     result.content = r
    // }).catch(e => {
    //     console.error(e)
    // })

    // res.status(200).send(JSON.stringify(result))
}