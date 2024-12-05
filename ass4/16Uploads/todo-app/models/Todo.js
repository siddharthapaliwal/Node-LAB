const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
mongoose.connect('mongodb://127.0.0.1:27017/todoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connect('mongodb://127.0.0.1:27017/todoApp')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

module.exports = mongoose.model('Todo', TodoSchema);
