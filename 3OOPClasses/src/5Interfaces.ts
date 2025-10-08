export {}

// Una interfaz es un contrato o plantilla entre componentes de código

interface HrManager {
    getAllSalaries(): string []
}

interface ScrumMaster {
    holdScrumMeeting(): void
}

class PersonaTodorreno implements HrManager, ScrumMaster{

    getAllSalaries(): string[] {
        return [];
    }

    holdScrumMeeting(): void {
        console.log('Holding scrum meeting ...')
    }
}

class Project{
    name: string;
    budget: number;
    // scrumMaster: PersonaTodoTerreno || si indicamos que scrumMater es de tipo PersonaTodoTerreno, podría acceder al método getAllSalaries(). Cuidado!!
    scrumMaster: ScrumMaster;

    constructor(name: string, budget:number, scrumMaster: ScrumMaster){
        this.name  = name;
        this.budget = budget;
        this.scrumMaster = scrumMaster;
    }

    holdScrumMeeting(){
        this.scrumMaster.holdScrumMeeting();
    }
}

const superManager = new PersonaTodorreno();
const basicProject = new Project('Basic Project', 50000, superManager);

basicProject.scrumMaster;