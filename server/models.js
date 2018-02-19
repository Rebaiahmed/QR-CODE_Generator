

const BlogSchema = new Schema({
  title : String ,
  content: String,
  category : String ,
  Tags : [{
    text: String,
  }]
  createdAt: { type: Date, default: Date.now },
  postedBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },

   comments: [{
      text: String,
      commentedByBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
  }]
  ,
votes: { type: Number, default: 0 }


});

const Blog = mongoose.model('Blog', BlogSchema);
