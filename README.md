# DenoApiRest
Simple example Api Rest with Deno and Oak

## Install Deno on Linux and MacOS

```
    $ curl -fsSL https://deno.land/x/install/install.sh | sh
```

## Run Deno

```
    $ deno run --allow-net --allow-read --allow-write index.ts 
```

## Getting with Curl

```
    $ curl -H 'content-type: application/json' -v -X GET http://127.0.0.1:8000/api/books
    $ curl -H 'content-type: application/json' -v -X GET http://127.0.0.1:8000/api/books/:id
    $ curl -H 'content-type: application/json' -v -X POST -d '{"title":"Foo bar", "description": "lorem ipsum", "price":"19.99"}' http://127.0.0.1:8000/api/books
    $ curl -H 'content-type: application/json' -v -X PUT -d '{"title":"Foo bar", "description": "lorem ipsum", "price":"19.99"}' http://127.0.0.1:8000/api/books/:id
    $ curl -H 'content-type: application/json' -v -X DELETE http://127.0.0.1:8000/api/books/:id
```
