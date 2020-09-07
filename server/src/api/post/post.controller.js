const Post = require('models/Post');


exports.list = async (ctx) => {
    console.log('list');

    let list = null;

    try {
        list = await Post.getList();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = list;
}

exports.write = async(ctx) => {
    const {
        writer,
        title,
        content
    } = ctx.request.body;

    const post = new Post({
        writer,
        title,
        content
    });

    try {
        await post.save();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = post;
};