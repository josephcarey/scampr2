import * as process from 'node:process'
import 'dotenv/config'
import { App } from '@slack/bolt'
// import { registerListeners } from './listeners/index.js'
import { BoltApp } from './types/index.js'
import { isNumeric } from './utils/index.js'

// const { App } = bolt

const DEFAULT_PORT = 3000

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, // Enable the following to use socket mode
    appToken: process.env.APP_TOKEN,
}) as unknown as BoltApp

// registerListeners(app)

app.command('/scampr', async ({ ack, say }) => {
    try {
        await ack()
        say('hello world!')
        // const response = await homeResponder()
        // await say(response)

        // Console.log(`Processing camperHandler request for text: ${command.text}`);

        // if (command.text && command.text.length === 0) {
        // say(
        // 'Oops! Received /camper command, but no name was included. Please include a name to search for a camper, e.g.: `/camper Jo`',
        // );
        // }

        // say('something went wrong with /scampr...');
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
})

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
