const express = require('express');
const userModel = require('../models/User');
const app = express();


app.post('/signup', async (req, res) => { 
    try {
      const new_user = await new userModel(req.body);
      await new_user.save();
      res.status(200).send(new_user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/login', async (req, res) => {
    try {
      const find_user = await userModel.findOne({username: req.body.user.username} || 
        {email: req.body.user.email} || {password: req.body.user.password})
      if (!find_user ){
        res.status(404).send("No User found")
      }
      res.status(204).json({
            "status": true,
            "email": find_user.email, 
            "message": "User Failed login in",
            "jwt_token": "Optional implementation"
          })
    } catch (err) {
      res.status(500).send(err)
    }
  })
  module.exports = app