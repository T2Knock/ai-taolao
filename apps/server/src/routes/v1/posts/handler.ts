import { STANDARD } from '@/constants/request';
import { handleServerError } from '@/helpers/errors.helpers';
import { type RouteHandler } from 'fastify';
import { posts } from './posts';
import type { Body, Params, PostNotFound, Querystring, Reply } from './schema';

export const getPostsHandler: RouteHandler<{
  Querystring: Querystring;
  Reply: Reply;
}> = async function (req, reply) {
  try {
    const { deleted } = req.query;

    if (!deleted) {
      const filteredPosts = posts.filter((post) => post.deleted === deleted);
      reply.send({ posts: filteredPosts });
    }

    reply.send({ posts });
  } catch (error) {
    handleServerError(reply, error);
  }
};

export const getOnePostHandler: RouteHandler<{
  Params: Params;
  Reply: Reply | PostNotFound;
}> = async function (req, reply) {
  try {
    const { postid } = req.params;
    const post = posts.find((p) => p.id == postid);

    if (post) reply.send({ posts: [post] });

    reply.notFound('Post not found');
  } catch (error) {
    handleServerError(reply, error);
  }
};

export const postPostsHandler: RouteHandler<{
  Body: Body;
  Reply: Body;
}> = async function (req, reply) {
  try {
    const newPostID = posts.length + 1;
    const newPost = {
      id: newPostID,
      ...req.body
    };
    posts.push(newPost);

    reply
      .code(STANDARD.CREATED.statusCode)
      .header('Location', `/posts/${newPostID}`)
      .send(newPost);
  } catch (error) {
    handleServerError(reply, error);
  }
};

export const putPostsHandler: RouteHandler<{
  Params: Params;
  Body: Body;
  Reply: PostNotFound;
}> = async function (req, reply) {
  try {
    const { postid } = req.params;
    const post = posts.find((p) => p.id == postid);
    if (post) {
      post.title = req.body.title;
      post.content = req.body.content;
      post.tags = req.body.tags;
      reply.code(STANDARD.NO_CONTENT.statusCode);
    }

    reply.notFound('Post not found');
  } catch (error) {
    handleServerError(reply, error);
  }
};

export const deletePostsHandler: RouteHandler<{
  Params: Params;
  Reply: PostNotFound;
}> = async function (req, reply) {
  try {
    const { postid } = req.params;
    const post = posts.find((p) => p.id == postid);

    if (post) {
      post.deleted = true;
      reply.code(STANDARD.NO_CONTENT.statusCode);
    }

    reply.notFound('Post not found');
  } catch (error) {
    handleServerError(reply, error);
  }
};
