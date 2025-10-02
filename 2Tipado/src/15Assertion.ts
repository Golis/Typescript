export {}

type SimpleJob = {
    condingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = {
    condingLanguage: string,
    sourceControl: string,
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

type QaJob = {
    scriptingLanguage: string,
    hasAutomatedTests: true
}

let simpleJob: SimpleJob = {
    condingLanguage: 'TypeScript',
    sourceControl: 'Git'
}

let complicatedJob: ComplicatedJob = {
    condingLanguage: 'C',
    sourceControl: 'Git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

let qaJob: QaJob = {
    scriptingLanguage: 'Python',
    hasAutomatedTests: true
}


simpleJob = complicatedJob;

// No funciona porque ComplicatedJob tiene más propiedades que SimpleJob
//complicatedJob = simpleJob;

complicatedJob = simpleJob as ComplicatedJob; // Type assertion (no recomendable)
complicatedJob = qaJob as unknown as ComplicatedJob; // Type assertion (no recomendable)

const complicatedJobMadeInSteps = {} as ComplicatedJob;
complicatedJob.condingLanguage = 'Java';
complicatedJob.hasManyMeetings = true;
complicatedJob.reportsToBeCompleted = ['monthly'];
complicatedJob.sourceControl = 'Git';

