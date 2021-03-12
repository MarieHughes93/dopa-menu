cd dm-frontend && npm install && npm run build
cp build/static/* ../dm-backend/public/static/
cp build/index.html ../dm-backend/app/views/app/index.html.erb