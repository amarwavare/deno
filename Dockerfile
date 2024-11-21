FROM denoland/deno:2.1.0 AS base

WORKDIR /server

COPY . ./

USER deno

RUN deno cache main.ts

CMD ["task", "start"]