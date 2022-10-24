const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/employees.js');
const userRouter = require('./routes/user.js');

const app = express();
app.use(express.json()); 

const DB_CONNECTION_STRING = "mongodb+srv://alexpopo123:Ab51717554@cluster0.sqkk7an.mongodb.net/Assignment1?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('failed to connect Database', err);
    process.exit();
});

app.use("/api/emp/employees", employeeRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 8081, () => { console.log('Server now starting to run....') });


