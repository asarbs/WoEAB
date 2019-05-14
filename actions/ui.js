function pageBuilder(db)
{
    selectArmy(db)
}

function selectArmy(db)
{
    console.log("SelectArmy")
    selectArmyDiv = document.getElementById('select_army')
    
    innerHtml = "<select>"
    for(army in db['armies'])
    {
        innerHtml +=  `<option>${db['armies'][army]['name']}</option>`
    }
    innerHtml += "</select>"
    
    selectArmyDiv.innerHTML = innerHtml;
}

exports.pageBuilder = pageBuilder
exports.selectArmy = selectArmy
