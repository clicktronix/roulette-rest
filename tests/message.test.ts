import { expect } from 'chai';
import { Response } from 'koa';
import * as httpStatus from 'http-status';
import supertest from 'supertest';

import { ROUTE_AUTH, ROUTE_MESSAGES } from 'routes/constants';

import { registerUser } from './helpers/auth';
import { app } from '../src';

const userRequest = {
  email: 'userEmail@gmail.com',
  password: '123456',
};
const messageRequest = {
  content: 'message',
  owner: 'userEmail@gmail.com',
  sender: 'userEmail@gmail.com',
  onModel: 'User',
};

const INVALID_ID = '5c535bec1234352055129874';

describe('Message module', () => {
  let server: any;
  let userResponseData: Response;
  let messagesResponseData: Response;

  before(async () => {
    try {
      server = supertest(app);
      await registerUser(server, userRequest);
      userResponseData = await server.post(ROUTE_AUTH).send(userRequest);
      await server.post(ROUTE_MESSAGES)
        .send(messageRequest)
        .set('Authorization', userResponseData.body.token.accessToken);
      messagesResponseData = await server.get(ROUTE_MESSAGES)
        .set('Authorization', userResponseData.body.token.accessToken);
    } catch (err) {
      console.error(err);
    }
  });

  describe(ROUTE_MESSAGES, () => {
    it('Should get messages', async () => {
      const res = await server
        .get(ROUTE_MESSAGES)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.OK);
      expect(res.body.data).to.be.an('array');
      expect(res.body).to.deep.equal(messagesResponseData.body);
    });

    it('Should return message by id', async () => {
      const res = await server
        .get(`${ROUTE_MESSAGES}/${messagesResponseData.body.data[0]._id}`)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.OK);
    });

    it('Should return error if message id is invalid', async () => {
      const res = await server
        .get(`${ROUTE_MESSAGES}/${INVALID_ID}`)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.NOT_FOUND);
      expect(res.error.message).to.be.an('string');
    });

    it('Should return error if access token is invalid', async () => {
      const res = await server
        .get(`${ROUTE_MESSAGES}/${messagesResponseData.body.data[0]._id}`)
        .set('Authorization', INVALID_ID);

      expect(res.status).to.equal(httpStatus.UNAUTHORIZED);
      expect(res.error.message).to.be.an('string');
    });

    it('Should add new message', async () => {
      const res = await server
        .post(ROUTE_MESSAGES)
        .send(messageRequest)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.CREATED);
    });

    it('Should return error if access token is invalid, when a message is added', async () => {
      const res = await server
        .patch(`${ROUTE_MESSAGES}/${messagesResponseData.body.data[0]._id}`)
        .send(messageRequest)
        .set('Authorization', INVALID_ID);

      expect(res.status).to.equal(httpStatus.UNAUTHORIZED);
      expect(res.error.message).to.be.an('string');
    });

    it('Should return error if message id is invalid, when a message is added', async () => {
      const res = await server
        .patch(`${ROUTE_MESSAGES}/${INVALID_ID}`)
        .send(messageRequest)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.NOT_FOUND);
      expect(res.error.message).to.be.an('string');
    });

    it('Should add new message', async () => {
      const res = await server
        .post(ROUTE_MESSAGES)
        .send(messageRequest)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.CREATED);
    });

    it('Should return error if access token is invalid, when the message is updated', async () => {
      const res = await server
        .patch(`${ROUTE_MESSAGES}/${messagesResponseData.body.data[0]._id}`)
        .send(messageRequest)
        .set('Authorization', INVALID_ID);

      expect(res.status).to.equal(httpStatus.UNAUTHORIZED);
      expect(res.error.message).to.be.an('string');
    });

    it('Should return error if message id is invalid, when the message is updated', async () => {
      const res = await server
        .patch(`${ROUTE_MESSAGES}/${INVALID_ID}`)
        .send(messageRequest)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.NOT_FOUND);
      expect(res.error.message).to.be.an('string');
    });

    it('Should delete message', async () => {
      const newMessage = {
        content: 'new message',
        owner: 'userEmail@gmail.com',
        sender: 'userEmail@gmail.com',
        onModel: 'User',
      };
      await server
        .post(ROUTE_MESSAGES)
        .send(newMessage)
        .set('Authorization', userResponseData.body.token.accessToken);

      const messages = await server
        .get(ROUTE_MESSAGES)
        .set('Authorization', userResponseData.body.token.accessToken);
      const res = await server
        .delete(`${ROUTE_MESSAGES}/${messages.body.data[1]._id}`)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.NO_CONTENT);
    });

    it('Should throw error if the message id being deleted does not exist', async () => {
      const res = await server
        .delete(`${ROUTE_MESSAGES}/${INVALID_ID}`)
        .set('Authorization', userResponseData.body.token.accessToken);

      expect(res.status).to.equal(httpStatus.NOT_FOUND);
      expect(res.error.message).to.be.an('string');
    });
  });
});
