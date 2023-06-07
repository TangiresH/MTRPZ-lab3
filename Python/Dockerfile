FROM python:slim-bullseye

WORKDIR /myapp

COPY requirements/backend.in .

RUN pip install --no-cache-dir -r backend.in

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]