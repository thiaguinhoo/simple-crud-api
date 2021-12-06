/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define("User",{
        username:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        }
    })
    

    User.associate = models =>{
        User.hasMany(models.Tarefas,{
            onDelete: "cascade"
        })
        User.hasMany(models.Todos,{
            onDelete: "cascade"
        })
    }
   
    return User;
    
}



