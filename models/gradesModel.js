export default (moongose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    value: {
      type: Number,
      required: false,
      validate(value) {
        if (value < 0) {
          throw new Error('Valor Negativo');
        }
      },
    },
    lastModified: {
      type: String,
      required: false,
    },
  });

  const gradeModel = moongose.model('grades', schema, 'grades');

  return gradeModel;
};
