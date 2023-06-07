FROM golang AS builder

WORKDIR /myapp

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o build/fizzbuzz

FROM gcr.io/distroless/base

COPY --from=builder /myapp/build/fizzbuzz /

COPY --from=builder /myapp/templates/index.html /templates/

EXPOSE 8080

CMD ["/fizzbuzz", "serve"]