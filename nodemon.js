{
  "restartable": "rs",
  "ignore": [
    ".git",
   "node_modules/**/node_modules",
   "scripts/**",
   "public/bower_components/**",
   "gulpfile.js",
   "app_client/**",
   "docs/"
 ],
 "events": {
  },
  "watch": [
    "server.js",
    "app.js",
    "api/***",
    "client/client.server"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js json"
}


