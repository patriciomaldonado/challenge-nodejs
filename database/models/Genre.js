module.exports = (sequelize, dataTypes) => {
    let alias = "Genre";
    let cols = {
        id: {
        type: dataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING(100)
        },
        ranking:{
            type: dataTypes.INTEGER(10)
        },
        active:{
            type: dataTypes.TINYINT(1)
        }
        };
    let config = {
        tableName: "genres",
        timestamps: false
    }
    
      
    const Genre = sequelize.define(alias, cols, config)
    

    Genre.associate = function(models) {
        Genre.hasMany(models.Movie, {
        as: "movies",
        foreignKey: "genre_id"
    })
    }

    return Genre;
    }