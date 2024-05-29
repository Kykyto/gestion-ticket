
import axios from 'axios'
import { watch, app } from 'vue'

export default {
    install: (app, url) => {

        const http = axios.create({
            baseURL: url,
            headers: {
            },
        })
        app.provide('http', http)
    }
}
