const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get("/:username", (req, res) => {
    if(!req.session.user){
        res.status(404).send("Voce precisa fazer login para acessar")
        return
    }
    const username = req.params.username
    res.render("index.ejs")
})



module.exports = router