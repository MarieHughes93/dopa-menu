FROM ruby:2.6.1

ENV REACT_API_HOST https://dopa-menu-js.herokuapp.com/
ENV REACT_APP_API_HOST https://dopa-menu-js.herokuapp.com/
RUN apt-get update -qq && apt-get install -y curl postgresql-client 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update && apt-get install -y nodejs

WORKDIR /dm-frontend

COPY ./dm-frontend/src /dm-frontend/src
COPY ./dm-frontend/public /dm-frontend/public
COPY ./dm-frontend/package.json /dm-frontend/package.json
COPY ./dm-frontend/.env.production /dm-frontend/.env
COPY ./dm-frontend/package-lock.json /dm-frontend/package-lock.json
RUN npm install && npm run build -p

WORKDIR /
COPY ./deployment-tasks.sh /deployment-tasks.sh

WORKDIR /dm-backend
COPY ./dm-backend/Gemfile /dm-backend/Gemfile
COPY ./dm-backend/Gemfile.lock /dm-backend/Gemfile.lock
RUN bundle install
COPY ./dm-backend/ /dm-backend/
RUN mkdir -p /dm-backend/public/static/ && cp -r ../dm-frontend/build/static/* /dm-backend/public/static/ && cp ../dm-frontend/build/index.html /dm-backend/app/views/app/index.html.erb

WORKDIR /dm-backend
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]