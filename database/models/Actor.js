module.exports = (sequelize, dataTypes) => {
    let alias = "Actor";
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
        first_name: {
            type: dataTypes.STRING(100)
        },
        last_name:{
            type: dataTypes.STRING(100)
        },
        rating:{
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER(10)
        }
        };
    let config = {
        tableName: "actors",
        timestamps: false
    }
    
      
    const Actor = sequelize.define(alias, cols, config)
    

    Actor.associate = function(models) {
        User.belongsToMany(models.Movie, {
        as: "movies",
        through: "ActorMovie",
        foreignKey: "actor_id",
        otherKey: "movie_id",
        timestamps: false
    })
    }

    return Actor;
    }