# CNPMHDT

Project môn Công nghệ phầm mềm HĐT - Web bán hàng Online Sản phẩm thiết bị điện tử

## BackEnd:

- create database name: **database_development** in your mysql
- cd be/app
- yarn - with yarn/ npm install -with npm
- yarn start - with yarn/ npm start - with npm

## Run Seeder:

    - open your mysql config file
    - update max-allow-packet to greater than 10MB
    - cd be/app
    - npx sequelize-cli db:seed:all
