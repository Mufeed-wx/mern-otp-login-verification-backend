const router = require('express').Router()

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

let numberVerification = ""
router.post('/mobile', (req, res) => {
    let numberVerification = req.body.number;
    client.verify
        .services(process.env.SERVICE_SID)
        .verifications.create({
            to: `+91${req.body.number}`,
            channel: "sms"
        })
        .then((response) => {
            res.status(200).send({message:"suucessfully completed send otp"})
        })
})

router.post('/otp', (req, res) => {
    const otp = req.body.otp
    client.verify
        .services(process.env.SERVICE_SID)
        .verificationChecks.create({
            to: `+91${7559040048}`,
            code: otp
        })
        .then((response) => {
            res.status(200).send({message:"user verified"})
        })
        .catch((error) => {
            console.log(error,'error occured');
        })
})

module.exports = router;