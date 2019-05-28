'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  login: '"/login"',
  logout: '"/logout"',

  addLearn: '"/addLearn"',
  getLearnDetail: '"/getLearnDetail"',
  updateLearn: '"/updateLearn"',
  getLearnList: '"/getLearnList"',
  deleteLearn: '"/deleteLearn"',
})
