const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    username: { type: String, required: true, },
    reactions: [Reaction]
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

// Create a virtual property `fullName` that gets and sets the user's full name

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;