module.exports = (sequelize, DataTypes) =>{
    const Todos = sequelize.define("Todos",{
        Categoria:{
            type:DataTypes.STRING,
            allowNull: false    
        }
    })
    

   Todos.associate = models =>{
        Todos.hasMany(models.Tarefas,{
           foreignKey: false
        })
        Todos.belongsTo(models.User,{
            foreignKey: false
         })
    }
    
    return Todos
}