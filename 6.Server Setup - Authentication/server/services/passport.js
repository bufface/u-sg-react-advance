const passport = require('passport');
const User = require('../models/user');
const config = require('../confg');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
