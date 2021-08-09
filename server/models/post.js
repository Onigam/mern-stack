const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    imageUrl: { type: 'String' },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});

module.exports = mongoose.model('Post', postSchema);
