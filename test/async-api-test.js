import { expect } from 'chai'
import 'mocha'
import * as payload from './helper/payload'
import { gender, activity } from '../config/common'
import request from '../config/requestSetup'
require('dotenv').config()
const TOKEN = process.env.USER_TOKEN

describe('API test examples', () => {
	let userId, postId

	before(async () => {
		// runs once before the first test in this block
		// gets user and post id required for the tests
		const res = await request
			.post('users')
			.set('Authorization', `Bearer ${TOKEN}`)
			.send(payload.User)

		userId = res.body.id
		postId = res.body.id

		console.log('The userId is ' + userId)
	})

	//Async post request
	it('POST user post', async () => {
		const res = await request
			.post('posts')
			.set('Authorization', `Bearer ${TOKEN}`)
			.send({ ...payload.Post, user_id: userId })

		console.log('Status is ' + res.statusCode)
		console.log(res.body)
		expect(res.statusCode).to.equal(201)
		expect(res.body).to.deep.include({ ...payload.Post, user_id: userId })
		postId = res.body.id
		console.log('The postId is ' + userId)
	})

	//Async get request
	it('GET user post', async () => {
		const res = await request
			.get(`posts/${postId}`)
			.set('Authorization', `Bearer ${TOKEN}`)

		console.log('Status is ' + res.statusCode)
		console.log(res.body)
		expect(res.statusCode).to.equal(200)
		expect(res.body).to.not.be.null
	})

	//Async put request
	it('PUT user info', async () => {
		const res = await request
			.put(`users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)
			.send(payload.DataChange)

		console.log('Status is ' + res.statusCode)
		console.log(res.body)
		expect(res.body.gender).to.equal(gender)
		expect(res.body.status).to.equal(activity)
	})

	//Async delete request
	it('DELETE user', async () => {
		const res = await request
			.delete(`users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)

		console.log('Status is ' + res.statusCode)
		console.log(res.body)
		expect(res.statusCode).to.equal(204)
		expect(res.body).to.be.empty
	})
})
