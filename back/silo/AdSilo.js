const express = require('express');
const router = express.Router();
const auth = require('../security/Authentication')
const config = require('../security/Config')
const fs = require('fs');
const ytdl = require('ytdl-core');
const {getAd} = require("../models/dbConnection");


/********   CreateAd   ***********/

router.post('/save', async (req, res) => {
    const { userIdp, adIdp, descriptionp, titlep } = req.body;
    const Ad = getAd(global['dbConnection']);

    const ad = new Ad({
        adId: adIdp,
        userId: userIdp,
        description: descriptionp,
        title: titlep
    });

    ad.save();

    return res.json({
        status: 'success',
        message: 'ad successfully added'
    })
});


/********   getAd   ***********/

router.get('/all/:aId', async(req, res) => {

    const Ad = getAd(global['dbConnection']);
    Ad.find({
        adId: req.params.aId
    })
        .then(ads => {
            return res.json(ads)
        })
        .catch(error => {
            console.log(error)
            return res.json({
                status: 'error',
                message: 'Error server while fetching your ads'
            })
        });

});

module.exports = router;
