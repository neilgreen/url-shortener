# URL Shortener Coding Exercise

Since writing a clone of [Bitly](https://bit.ly) is a common take-home coding test, I wanted to create my own entry 
into this coding test genre. All the code was written by me over the course of around 10 hours (with breaks). I've never looked to see how other people complete this exercise, so this is a pure representation of how I would approach the challenge.

## Notes

- This is a NodeJS application and requires a Node version >= 0.12

- This system uses Postgres as it's persistence mechanism. The PG_* environment variables will have to be set properly
before running `make setup`.

- My next step of testing would be to write integration tests against the REST endpoint, as continuing to test
by mocking the persistence layer dependencies would lead to false negatives and positives, as well as primarily test the
function of already well-tested libraries like Express and Knex. 

- Once the automated integration tests were done, I would then write a performance test suite to benchmark the
application and get a better idea of reasonable .env defaults.

- As there is only a single 2-column table in Postgres it is anticipated that millions of URLs could be stores with
little impact to performance. Performance testings would test this theory.

- The URL_TOKEN_LENGTH and COLLISION_AVOIDANCE_ATTEMPTS_ALLOWED are meant to be use in conjunction with server log
monitoring alerts (e.g. with systems like PaperTrail). Setting alerts for TOKEN_COLLISION and COULD_NOT_AVOID_TOKEN_COLLISION
will let you know when you need to increase the URL_TOKEN_LENGTH and/or the COLLISION_AVOIDANCE_ATTEMPTS_ALLOWED. This
allows you to  generate very short URL tokens and then gauge with real-time monitoring when the variables should be
increased to decrease collisions. 

- The TokenUrlCache could easily be rewritten to use a key/value store like Cassandra if performance results demanded it.

- Considering the simplicity of the UI required, I elected not to use a UI framework. As there is so little HTML, CSS,
and JS they were all written together into a single static file so they could be gZipped together for a single request
that wouldn't invoke a route. If a more complex US was specified I would most likely have used React.
