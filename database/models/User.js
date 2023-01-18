module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
    id: {
    type: dataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
    },
    name: {
        type: dataTypes.STRING(255)
    } ,
    email:{
        type: dataTypes.STRING(255)
    },
    password:{
        type: dataTypes.STRING(255)
    } ,
    remember_token: {
        type: dataTypes.STRING(100)
    },
    created_at: {
        type: dataTypes.DATE
    },
    updated_at: {
        type: dataTypes.DATE
    },
    rol: {
        type: dataTypes.INTEGER(4)
    }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }
    
      
    const User = sequelize.define(alias, cols, config)
    
    return User;
    }