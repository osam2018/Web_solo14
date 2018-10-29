export interface CompetitionInterface { 
    belong : string;
    title: string;
    link: string;
    date: string; 
}  

export interface ShareInterface { 
    name : string, 
    include : string, 
    place : string, 
    star : number, 
    img : string, 
    lat : string, 
    lon : string
}    

export interface EvaluationInterface { 
    name : string, 
    place : string, 
    placeStar : number, 
    personStar : number, 
    diffStar : number, 
    evaluation : string, 
    date : string
} 

export interface ShareUserInterface { 
    name : string, 
    phone : string, 
    message : string, 
    date : string
} 


