export {}

type SimpleJob = {
    condingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = SimpleJob & { //Intersección
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

let complicatedJob: ComplicatedJob = {
    condingLanguage: 'C',
    sourceControl: 'Git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

// Esta es una manera de usar los tipos extendidos con interfaces
type MeetingHolder = {
    meetingMaxLengthInMinutes: number,
    holdMeeting: () => void
}

// Una interfaz es un contrato que indica que cuando se implemente se deben referenciar y dar valor a cada parámetro o método indicado
// Una clase puede implementar una o varias interfaces (en este caso el tipo está teniendo un comportamiento de interfaz)
class ProjectManager implements MeetingHolder{
    meetingMaxLengthInMinutes = 60;
    holdMeeting(): void {
        console.log('Meeting held');
    }
}