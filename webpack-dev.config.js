let config= require("./webpack.config");

config.devtool= 'source-map';

config.devServer= {
  port: 8080
};

module.exports= config;