//arrow function
module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define('Product',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
          },
            name:{
              type: DataTypes.STRING,
              allowNull:false,
            }, 
            brand:{
              type: DataTypes.STRING,
              allowNull:false,
            },
            description:{
              type: DataTypes.TEXT,
            },
            createdAt:{
              type: DataTypes.DATE,
              allowNull:false,
            },
            updateAt:{
              type: DataTypes.DATE,
              allowNull:false,
            }},
            {
                tableName: 'products'   
            });
            return Product
//tablename merupakan konfigurasi tambahan dari namatable diwebserver
}