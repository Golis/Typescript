export {}

type Manager = {
    team?:{
        scrumMaster?:{
            holdDailyMeeting:() => void
        }
    }
}

function manage(manager: Manager){
    manager.team?.scrumMaster?.holdDailyMeeting();
}

// Método alternativo para hacer lo mismo que el método anterior
function manageOld(manager: Manager){
    if(manager.team && manager.team.scrumMaster){
        manager.team.scrumMaster.holdDailyMeeting();
    }
}

// Mala práctica para decirle al compilar que estás seguro de que esto va a tener datos y que asumes el riesgo
function manageSure(manager: Manager){
    manager.team!.scrumMaster!.holdDailyMeeting();
}


