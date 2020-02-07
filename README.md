simula


Code Format
yarn format


Create migrations
yarn sequelize migration:create --name=${NAME_MIGRATION}

Run migrations
yarn sequelize db:migrate

Undo migrations
yarn sequelize db:migrate:undo -> Undo last migrations executed
yarn sequelize db:migrate:undo:all -> Undo all migrations\
