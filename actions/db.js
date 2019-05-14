function ArmyNotFound(message) 
{
   this.message = message;
   this.name = 'ArmNotFound';
}

function getArmy(id)
{
    for(var army in db['armies'])
    {
        if(db['armies'][army]['id'] == id)
            return db['armies'][army]
    }
    throw ArmyNotFound(`army with ${id} not founded`)
}


exports.getArmy = getArmy
exports.ArmyNotFound = ArmyNotFound
