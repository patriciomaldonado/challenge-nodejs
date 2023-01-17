module.exports = (sequelize, dataTypes) => {
    let alias = "ActorMovie";
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
        actor_id: {
            type: dataTypes.INTEGER(10)
        },
        movie_id:{
            type: dataTypes.INTEGER(10)
        }
        };
    let config = {
        tableName: "actorsMovies",
        timestamps: false
    }
    
      
    const ActorMovie = sequelize.define(alias, cols, config)
    

    ActorMovie.associate = function (models) {
        ActorMovie.belongsTo(models.Movie, {
            foreignKey: "movie_id"
        })
        ActorMovie.belongsTo(models.Actor, {
            foreignKey: "actor_id"
        })
    }
    return ActorMovie;
    }