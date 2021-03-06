//Import relevant libraries
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//import models
import Issue from './models/Issue';

const app = express();
const router = express.Router();

//Attach middleware to Server
//CORS = cross origin resource sharing
//Body parser because we pass json files between server and client using express

//Mongoose is a node package that enables easier connection to a mongoDB
//Database. Allows for a straight forward schema based management.
//Essentially ORM for MongoDB, since we're using a RESTful based API


app.use(cors());
app.use(bodyParser.json());

//TODO: Add DB connection URL

//Mongoose connection to mongoDB
mongoose.connect('mongodb://localhost:27017/issues', {useNewUrlParser : true});
const connection = mongoose.connection;

//Listener even for opened connection
connection.once('open', () => {       //Arrow denotes function, left is parameters
  console.log('MongoDB successfully connected!'); //Ouput to log
});

//Router endpoints

//Endpoint for issues
router.route('/issues').get((req, res) => {

//Fat arrow syntax denots an anonymous function in the form of
// (Parameters) => {actions}
//Can be nested inside function parameters
//ECSMAscript6

//find the issue in response body if there is no error return
  Issue.find((err, issues) => {
    if(err)
      console.log(err);
    else
      res.json(issues);
  });
});

//Endpoint for issue with a specific ID
router.route('/issues/:id').get((req, res) => {
  Issue.findById(req.params.id, (err, issues) => {
    if(err)
      console.log(err);
    else
      res.json(issues);
  });
});

//Endpoint for adding an issue to db
router.route('/issues/add').post((req, res) => {
  let issue = new Issue(req.body);
  issue.save()
    .then(issue => {
      res.status(200).json({'issue': 'Added successfully'});
    })
    .catch(err => {
      res.status(400).send('Failed to create new Issue');
    });
});

//Endpoint for updating issue
router.route('/issues/update/:id').post((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
      if(!issue)
        return next(new Error('could not load initial Issue'));
      else

      //Fill issue object with request attributes
      //fill existing issue with new attributes basically

        issue.title = req.body.title;
        issue.responsible = req.body.responsible;
        issue.description = req.body.description;
        issue.severity = req.body.severity;
        issue.status = req.body.status;
        issue.save()
          .then(issue => {
            res.json('Successfully updated Issue');
          }).catch(err => {
            res.status(400).send('Failed to update issue');
          });
      });
  });

//Endpoint for deleteing issue
router.route('/issues/delete/:id').get((req, res) => {
  //auto generated ID in mongoose/mongoDB uses _id notations
  Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
    if(err)
      res.json(err);
    else
      res.json('Issue successfully removed');
  });
});

app.use('/', router);

//Server listen on port 4000
app.listen(4000, () => console.log('express server running on port 4000...'));
