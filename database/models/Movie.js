module.exports = (sequelize, dataTypes) => {
    let alias = "Movie";
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
        title: {
            type: dataTypes.STRING(500)
        },
        rating:{
            type: dataTypes.DECIMAL(3,1)
        },
        awards:{
            type: dataTypes.INTEGER(10)
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER(10)
        },
        genre_id: {
            type: dataTypes.INTEGER(10)
        }
        };
    let config = {
        tableName: "movies",
        timestamps: false
    }
    
      
    const Movie = sequelize.define(alias, cols, config)
    

    Movie.associate = function(models) {
        Movie.belongsToMany(models.Actor, {
        as: "actors",
        through: "actor_movie",
        foreignKey: "movie_id",
        otherKey: "actor_id",
        timestamps: false
        })
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id",
        })
    }



    return Movie;
    }