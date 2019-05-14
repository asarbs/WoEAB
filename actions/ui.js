const dbhelper = require(path.resolve('actions/db'))

function buildPage()
{
    main_unit_list_div = document.getElementById('main_unit_list')
    unitList = document.createElement('ul')
    unitList.setAttribute("id", "unitListMenu")
    
    army = dbhelper.getArmy(selectedArmies)
    
    for(var dbUnit in army['units'])
    {
        unit_name = army['units'][dbUnit]['name']
        unit_id = army['units'][dbUnit]['id']
        var li = document.createElement("li");
        li.appendChild( document.createTextNode( unit_name ));
        const fullId = `armies.${selectedArmies}.unit.${unit_id}` 
        
        li.setAttribute('ondblclick', `addUnit2List("${fullId}")`);
		unitList.appendChild(li);
    }
    
    main_unit_list.appendChild(unitList)
}

function selectArmyWidget()
{
    selectArmyDiv = document.getElementById('select_army')
    
    innerHtml = `<select id="select_army_menu" onchange="ui.selectArmy();">`
    innerHtml += `<option value="-1">Select your army</option>`
    for(army in db['armies'])
    {
        innerHtml +=  `<option value="${db['armies'][army]['id']}">${db['armies'][army]['name']}</option>`
    }
    innerHtml += `</select>`
    
    selectArmyDiv.innerHTML = innerHtml;
}

function selectArmy()
{
    selectArmyDiv = document.getElementById('select_army_menu')
    
    selectedArmies = selectArmyDiv.options[selectArmyDiv.selectedIndex].value;
    
    selectArmyDiv.parentNode.removeChild(selectArmyDiv);
    mainDiv = document.getElementById('main')
    buildPage()
    mainDiv.style.visibility = "visible"
}

exports.selectArmy = selectArmy
exports.selectArmyWidget = selectArmyWidget
