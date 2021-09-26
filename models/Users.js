const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const nameValidator = [
      validate({
            validator: 'isLength',
            arguments: [0, 40],
            message: 'Name must not exceed {ARGS[1]} characters.'
      })
];

const emailValidator = [
      validate({
            validator: 'isLength',
            arguments: [0, 40],
            message: 'Email must not exceed {ARGS[1]} characters.'
      }),
      validate({
            validator: 'isEmail',
            message: 'Email must be valid.'
      })
];

// Define the database model
const UserSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
            validate: nameValidator
      },
      email: {
            type: String,
            required: true,
            unique: true,
            validate: emailValidator
      },
      age: {
            type: Number,
            required: true
      },
      gender: {
            type: String,
            required: true
      }
});

// Use the unique validator plugin
UserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const User = module.exports = mongoose.model('user', UserSchema);