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
    "start": "yarn eslint server.js app_api/**",
    "restart": "yarn eslint server.js app_api/**"
  },
  "watch": [
    "server.js",
    "app_api/**"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js json"
}

 