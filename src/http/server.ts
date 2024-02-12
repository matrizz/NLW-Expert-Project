import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
	secret: 'dK5kY7nS9yJ7zP0fX7jF8mP8fB4sI8bK0mX7sO2cF1nT7xR0',
	hook: 'onRequest'
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(pollResults)
app.register(voteOnPoll)


app.listen({ port: 3333 }).then(() => {
	console.log('🔥 HTTP server running!')
})
