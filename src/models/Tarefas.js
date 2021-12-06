

module.exports = (sequelize, DataTypes) =>{
    const Tarefas = sequelize.define("Tarefas",{
        titulo:{
            type:DataTypes.STRING,
            allowNull: false    
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull: false   
        },
       
        done:{
            type: DataTypes.TINYINT,
            defaultValue: false
        }
    })
    

   Tarefas.associate = models =>{
        Tarefas.belongsTo(models.User,{
           foreignKey: false
        })
        Tarefas.belongsTo(models.Todos,{
            foreignKey: false
         })
    }
    
    return Tarefas
}