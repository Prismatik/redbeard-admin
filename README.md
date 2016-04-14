# Redbeard Admin [![Build Status](https://travis-ci.com/Prismatik/redbeard-admin.svg?token=31ttRGpUkXrervGufjuh&branch=master)](https://travis-ci.com/Prismatik/redbeard-admin)

Redbeard Admin is an accompaniment to [Redbeard](https://github.com/Prismatik/redbeard)
and provides an admin UI layer for your Redbeard API.

## Install

```
npm i
```

## Development

Redbeard Admin uses webpack for local development.  There area a few dev commands
available:

```
npm run build
```

This will bundle the project for production usage into `/dist/app.js`.

```
npm run dev
```

This will start a local webpack server at `http://localhost:3005` and will
watch for any file changes.
