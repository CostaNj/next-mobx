const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Resume = require('./models/resume')

mongoose.connect(process.env.MONGO_SERV,
    { useNewUrlParser: true })
    .then((response) => {
        console.log('connected to mongo')
    })
    .catch((err)=>{
        console.log(err)
    })

app.prepare()
    .then(() => {
        const server = express()
        server.use(compression())
        server.use(bodyParser.json())


        server.post('/api/v1/addresume', (req, res) => {
            const resumeData = req.body
            const resume = new Resume(resumeData)

            resume.save((err, resume) => {
                if(err) {
                    res.status(422).send(err)
                }

                return res.json(resume)

            })
        })

        server.get('/api/v1/findresume/:id', (req, res) => {
            let resumeId = req.params.id
            console.log(resumeId)
            Resume.findById(resumeId, (err, resume) => {
                if(err) {
                    res.status(422).send(err)
                }

                return res.json(resume)
            })
        })

        server.get('/resume/:id', (req, res) => {
            const actualPage = '/resume'
            const queryParams = { resumeId: req.params.id}
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        const PORT = process.env.PORT || 3000

        server.listen(PORT, (err) => {
            if(err) throw err
            console.log(`ready on port ${PORT}`)
        })

    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })