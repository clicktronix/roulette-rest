import { BaseContext } from 'koa';
import * as httpStatus from 'http-status';

import { User } from 'models/userModel';

export default class UserController {
  /**
   * GET /users
   */
  public async getUsers(ctx: BaseContext) {
    try {
      const users = await User.find({});
      ctx.status = httpStatus.OK;
      ctx.body = {
        data: users,
      };
    } catch (err) {
      ctx.throw(err.status, err.message);
    }
  }

  /**
   * GET /users/:userId
   */
  public async getUserById(ctx: BaseContext) {
    try {
      const user = await User.findById(ctx.request.ctx.params.userId);
      if (!user) {
        ctx.throw(httpStatus.NOT_FOUND, 'User not found');
        return;
      }
      ctx.status = httpStatus.OK;
      ctx.body = {
        data: user.toJSON(),
      };
    } catch (err) {
      ctx.throw(err.status, err.message);
    }
  }

  /**
   * PUT /users
   */
  public async updateUser(ctx: BaseContext) {
    const { request } = ctx;
    try {
      const user = await User.findOneAndUpdate({ email: request.body.email }, request.body, { new: true });
      if (!user) {
        ctx.throw(httpStatus.NOT_FOUND, 'User not found');
        return;
      }
      ctx.status = httpStatus.OK;
      ctx.body = {
        message: 'User updated',
        data: user.toJSON(),
      };
    } catch (err) {
      ctx.throw(err.status, err.message);
    }
  }

  /**
   * DELETE /users/:userId
   */
  public async deleteUser(ctx: BaseContext) {
    try {
      await User.deleteOne({ _id: ctx.request.ctx.params.userId });
      ctx.status = httpStatus.OK;
      ctx.body = { message: 'Successfully deleted user' };
    } catch (err) {
      ctx.throw(err.status, err.message);
    }
  }
}
