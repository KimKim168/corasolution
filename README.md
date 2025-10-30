Image Placholder URL : https://picsum.photos/seed/${index + 100}/600/400

# Setup Project
composer install
rm package-lock.json
npm install --force
cp .env.example .env
php artisan key:generate
php artisan migrate
composer run dev


# Init User
php artisan db:seed --class=RolesAndPermissionsSeeder
php artisan db:seed --class=UserSeeder


# CRUD table
php artisan make:model Page -m

- Route
- Controller
- Resource# corasolution
