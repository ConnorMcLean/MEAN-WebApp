//Issue model for mongoDB

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let issue = new Schema({


  title:{             //Attribute name
    type: String      //Attribute type
  },
  responsible:{
    type: String
  },
  description:{
    type: String
  },
  severity: {
    type: String
  },
  status: {
    type: String
    default: 'Open' //Default value
  }
});

export default mongoose.model('Issue', Issue);
