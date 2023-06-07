FROM golang AS builder

WORKDIR /myapp

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 go build -ldflags "-w -s -extldflags '-static'" -o build/fizzbuzz

FROM scratch

COPY --from=builder /myapp/build/fizzbuzz /

COPY --from=builder /myapp/templates/index.html /templates/

EXPOSE 8080

CMD ["/fizzbuzz", "serve"]