import * as process from 'node:process'
import 'dotenv/config'
import { App } from '@slack/bolt'
import { BoltApp } from './types'
import { registerRouters } from './routers'
import { isNumeric } from './util'

const DEFAULT_PORT = 3000

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, // Enable the following to use socket mode
    appToken: process.env.APP_TOKEN,
}) as unknown as BoltApp

registerRouters(app)

// Error handling
app.error(async (error: unknown) => {
    // Check the details of the error to handle cases where you should retry sending a message or stop the app
    console.log('an error occurred in scampr:', error)
    // Response.writeHead(200);
    // response.end();
})

const main: () => Promise<void> = async () => {
    try {
        const port = isNumeric(process.env.PORT)
            ? Number(process.env.PORT)
            : DEFAULT_PORT
        // Start your app
        await app.start(port)
        console.log(`Scampr is running on port ${port}...`)
    } catch (error) {
        console.log('Unable to start Scampr!', error)
    }
}

void main()

console.log('Working')
