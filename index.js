const express = require('express');
const ytdl = require('@distube/youtube-dl')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3030;

app.post('/instagram', (req, res) => {
    try {
        var url = req.body.url;
        ytdl(url, {
            dumpSingleJson: true,
        })
            .then(output => {
                var thubDetails = [];
                output.thumbnails.forEach((format) => {
                    var url = format.url;
                    var reso = format.resolution
                    thubDetails.push({
                        download: url,
                        quality: reso
                    })
                })
                var videoReq = [];
                output.requested_downloads.forEach((details) => {
                    var url = details.url;
                    var reso = details.resolution;
                    videoReq.push({
                        download: url,
                        quality: reso
                    })
                })
               return res.status(200).send({
                    // data: output
                    thumbnails: thubDetails,
                    video: videoReq
                })
            }).catch(e => {
                return res.status(400).send({ error: e.message })
            })
    } catch (error) {
       return res.status(400).send({ error: error })
    }
})

app.post('/youtube', (req, res) => {
    try {
        var url = req.body.url;
        ytdl(url, {
            dumpSingleJson: true,
        })
            .then(output => {
                var thubDetails = [];
                output.thumbnails.forEach((format) => {
                    var url = format.url;
                    var reso = format.resolution
                    thubDetails.push({
                        download: url,
                        quality: reso
                    })
                })
                var formatReq = [];
                output.formats.forEach((details) => {
                    var url = details.url;
                    var reso = details.resolution;
                    var ext = details.ext;
                    var format = details.format
                    formatReq.push({
                        download: url,
                        quality: reso,
                        extension: ext,
                        // format: format
                    })
                })
                return res.status(200).send({
                    // data: output
                    thumbnails: thubDetails,
                    videos: formatReq
                })
            }).catch(e => {
                return res.status(400).send({ error: e.message })
            })
    } catch (error) {
        return res.status(400).send({ error: error })
    }

})

app.post('/twitter', (req, res) => {
    try {
        var url = req.body.url;
        ytdl(url, {
            dumpSingleJson: true,
        })
            .then(output => {
                var thubDetails = [];
                output.thumbnails.forEach((format) => {
                    var url = format.url;
                    var reso = format.resolution
                    thubDetails.push({
                        download: url,
                        quality: reso
                    })
                })
                var videoReq = [];
                output.formats.forEach((details) => {
                    var url = details.url;
                    var reso = details.resolution;
                    var ext = details.video_ext
                    videoReq.push({
                        download: url,
                        quality: reso,
                        extension: ext
                    })
                })
                return res.status(200).send({
                    // data: output
                    thumbnails: thubDetails,
                    video: videoReq
                })
            }).catch(e => {
                return res.status(400).send({ error: e.message })
            })
    } catch (error) {
        // console.log(error);
        return res.status(400).send({ error: error })
    }
})

app.post('/dailymotion', (req, res) => {
    try {
        var url = req.body.url;
        ytdl(url, {
            dumpSingleJson: true,
        })
            .then(output => {
                var thubDetails = [];
                output.thumbnails.forEach((format) => {
                    var url = format.url;
                    var reso = format.resolution
                    thubDetails.push({
                        download: url,
                        quality: reso
                    })
                })
                var videoReq = [];
                output.formats.forEach((details) => {
                    var url = details.url;
                    var reso = details.resolution;
                    var ext = details.ext
                    videoReq.push({
                        download: url,
                        quality: reso,
                        extension: ext
                    })
                })
                return res.status(200).send({
                    // data: output
                    thumbnails: thubDetails,
                    video: videoReq
                })
            }).catch(e => {
                return res.status(400).send({ error: e.message })
            })
    } catch (error) {
        // console.log(error);
        return res.status(400).send({ error: error })
    }
})

app.post('/facebook', (req, res) => {
    try {
        var url = req.body.url;
        ytdl(url, {
            dumpSingleJson: true,
        })
            .then(output => {
                var thubDetails = [];
                output.thumbnails.forEach((format) => {
                    var url = format.url;
                    var reso = format.resolution
                    thubDetails.push({
                        download: url,
                        quality: reso
                    })
                })
                var videoReq = [];
                output.formats.forEach((details) => {
                    var url = details.url;
                    var reso = details.resolution;
                    var ext = details.ext
                    videoReq.push({
                        download: url,
                        quality: reso,
                        extension: ext
                    })
                })
                return res.status(200).send({
                    // data: output
                    thumbnails: thubDetails,
                    video: videoReq
                })
            }).catch(e => {
                return res.status(400).send({ error: e.message })
            })
    } catch (error) {
        // console.log(error);
        return res.status(400).send({ error: error })
    }
})

app.post('/vimeo', (req, res) => {
    try {
        var url = req.body.url;
        ytdl(url, {
            dumpSingleJson: true,
        })
            .then(output => {
                var thubDetails = [];
                output.thumbnails.forEach((format) => {
                    var url = format.url;
                    var reso = format.resolution
                    thubDetails.push({
                        download: url,
                        quality: reso
                    })
                })
                var formatReq = [];
                output.formats.forEach((details) => {
                    var url = details.url;
                    var reso = details.resolution;
                    var ext = details.ext;
                    var format = details.format
                    formatReq.push({
                        download: url,
                        quality: reso,
                        extension: ext,
                        // format: format
                    })
                })
               return res.status(200).send({
                    // data: output
                    thumbnails: thubDetails,
                    videos: formatReq
                })
            }).catch(e => {
                return res.status(400).send({ error: e.message })
            })
    } catch (error) {
       return res.status(400).send({ error: error })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})