export {}

class CompanyFounder {
    giveLongSpeechAboutCompanyPast(){
        console.log("It all started in a garage...");
    }
}

class CompanyCEO{
    giveLongSpeechAboutHowTheTimesAreHard(){    
        console.log("These are hard times for all of us... but we can do it!");
    }
}

type LongSpeechGiver = CompanyFounder | CompanyCEO;

function giveLongSpeech(speaker: LongSpeechGiver){
    if(speaker instanceof CompanyFounder){
        speaker.giveLongSpeechAboutCompanyPast();
    }
    if(speaker instanceof CompanyCEO){
        speaker.giveLongSpeechAboutHowTheTimesAreHard();
    }
}

giveLongSpeech(new CompanyFounder());
giveLongSpeech(new CompanyCEO());