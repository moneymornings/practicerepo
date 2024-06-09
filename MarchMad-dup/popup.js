// NCAA API 
function onloadCall() {
    
      
     

    //  let button = document.getElementsByClassName("exitpop");
    //  button.onclick = function() {
    //      box.style.display = "hidden";
    //  }
   
    //  exitpop.addEventListener("click", function () {
    //     winnerspopup.classList.remove("show");
    // });
    
    
    let ncaaSouth = [
        {
            teamName: "Alabama",
            seedNumber: 1,
            finalScore: 96,
            icon: null,
        },
        {
            teamName: "Texas A&M-Corpus Christi",
            seedNumber: 16,
            finalScore: 75,
            icon: null,
        },
        {
            teamName: "Maryland",
            seedNumber: 8,
            finalScore: 67,
            icon: null,
        },
        {
            teamName: "West Virgina",
            seedNumber: 8,
            finalScore: 65,
            icon: null,
        },
        {
            teamName: "San Diego St.",
            seedNumber: 5,
            finalScore: 63,
            icon: null,
        },
        {
            teamName: "Col. of Charleston",
            seedNumber: 12,
            finalScore: 57,
            icon: null,
        },
        {
            teamName: "Virginia",
            seedNumber: 4,
            finalScore: 67,
            icon: null,
        },
        {
            teamName: "Furman",
            seedNumber: 13,
            finalScore: 68,
            icon: null,
        },
        {
            teamName: "Creighton",
            seedNumber: 6,
            finalScore: 72,
            icon: null,
        },
        {
            teamName: "NC State",
            seedNumber: 11,
            finalScore: 63,
            icon: null,
        },
        {
            teamName: "Baylor",
            seedNumber: 3,
            finalScore: 74,
            icon: null,
        },
        {
            teamName: "UC Santa Barbara",
            seedNumber: 14,
            finalScore: 56,
            icon: null,
        },
        {
            teamName: "Missouri",
            seedNumber: 7,
            finalScore: 76,
            icon: null,
        },
        {
            teamName: "Utah St.",
            seedNumber: 10,
            finalScore: 65,
            icon: null,
        },
        {
            teamName: "Arizona",
            seedNumber: 2,
            finalScore: 55,
            icon: null,
        },
        {
            teamName: "Princeton",
            seedNumber: 15,
            finalScore: 59,
            icon: null,
        },
        
    ];
    
    let ncaaMidwest = [
        {
            teamName: "Houston",
            seedNumber: 1,
            finalScore: 63,
            icon: null,
        },
        
        {
            teamName: "Northern Kentucky",
            seedNumber: 16,
            finalScore: 52,
            icon:null,
        },
        
        {
            teamName: "Iowa",
            seedNumber: 8,
            finalScore: 75,
            icon: null,
        },
        {
            teamName: "Auburn",
            seedNumber: 9,
            finalScore: 83,
            icon:null,
        },
        
        {
            teamName: "Miami",
            seedNumber: 5,
            finalScore: 63,
            icon: null,
        },
        
        {
            teamName: "Drake",
            seedNumber: 12,
            finalScore: 56,
            icon: null,
        },
        
        {
            teamName: "Indiana",
            seedNumber: 4,
            finalScore: 71,
            icon: null,
        },
        {
            teamName: "Kent St.",
            seedNumber: 13,
            finalScore: 60,
            icon: null,
        },
        {
            teamName: "Iowa St",
            seedNumber: 6,
            finalScore: 52,
            icon:null,
        },
        
        {
            teamName: "Pittsburgh",
            seedNumber: 11,
            finalScore: 59,
            icon: null,
        },
        {
            teamName: "Xavier",
            seedNumber: 3,
            finalScore: 72,
            icon: null,
        },
        {
            
            teamName: "Kennesaw St",
            seedNumber: 14,
            finalScore: 67,
            icon: null,
        },
        
        {
            teamName: "Texas A&M",
            seedNumber: 7,
            finalScore: 59,
            icon: null,
            
        },
        {
            teamName: "Penn St",
            seedNumber: 10,
            finalScore: 76,
            icon: null,
        },
        
        {
            teamName: "Texas",
            seedNumber: 2,
            finalScore: 81,
            icon: null,
        },
        
        {
            teamName: "Xavier",
            seedNumber: 3,
            finalScore: 72,
            icon: null,
        },
        
        
        
    ];
    
    let ncaaWest = [
        {
            teamName: "Kansas",
            seedNumber: 1,
            finalScore: 96,
            icon: null,
        },
        
        {
            teamName: "Howard",
            seedNumber: 16,
            finalScore: 68,
            icon: null,
        },
        {
            teamName:"Arkansas",
            seedNumber: 8,
            finalScore: 73,
            icon: null,
        },
        {
            teamName: "Illinois",
            seedNumber: 9,
            finalScore: 63,
            icon: null,
        },
        {
            teamName:"Saint Mary's (CA)",
            seedNumber: 5,
            finalScore: 63,
            icon: null,
        },
        
        {
            teamName: "VCU",
            seedNumber: 12,
            finalScore: 51,
            icon:null,
        },
        {
            teamName: "UConn",
            seedNumber: 4,
            finalScore: 87,
            icon:null,   
        },
        
        {
            teamName: "Iona",
            seedNumber: 13,
            finalScore: 63,
            icon:null,
        },
        {
            teamName: "TCU",
            seedNumber: 6,
            finalScore: 72,
            icon:null,
        },
        {
            teamName: "Arizona St",
            seedNumber: 11,
            finalScore: 70,
            icon:null,
        },
        {
            teamName: "Gonzaga",
            seedNumber: 3,
            finalScore: 82,
            icon:null,
        },
        {
            teamName: "Grand Canyon",
            seedNumber: 14,
            finalScore: 70,
            icon:null,
        },
        {
            teamName: "Northwestern",
            seedNumber: 7,
            finalScore: 75,
            icon:null,
        },
        {
            teamName: "Boise St",
            seedNumber: 10,
            finalScore: 67,
            icon:null,
        },
        {
            teamName: "UCLA",
            seedNumber: 2,
            finalScore: 86,
            icon:null,
        },
        {
            teamName: "UNC Asheville",
            seedNumber: 15,
            finalScore: 53,
            icon:null,
        }
        
    ]    
    
    ncaaEast = [
        {
            teamName: "Purdue",
            seedNumber: 1,
            finalScore: 58,
            icon:null,
        },
        {
            teamName: "FDU",
            seedNumber: 16,
            finalScore: 63,
            icon:null,
        },
        {
            teamName: "Memphis",
            seedNumber: 8,
            finalScore: 65,
            icon:null,
        },
        {   teamName: "Fla. Atlantic",         
        seedNumber: 9,
        finalScore: 66,
        icon:null,
    },
    {
        teamName:"Duke",
        seedNumber: 5,
        finalScore: 74,
        icon: null,
    },
    {
        teamName:"Oral Roberts",
        seedNumber: 12,
        finalScore: 51,
        icon:null,
    },
    {
        teamName: "Tennesee",
        seedNumber: 8,
        finalScore: 58,
        icon:null,
    },
    {
        teamName: "Louisiana",
        seedNumber: 13,
        finalScore: 55,
        icon:null,
    },
    {
        teamName: "Kentucky",
        seedNumber: 6,
        finalScore: 61,
        icon:null,
    },
    {
        teamName:"Providence",
        seedNumber: 11,
        finalScore: 53,
        icon:null,
    },
    {
        teamName: "Kansas St.",
        seedNumber: 3,
        finalScore: 77,
        icon:null,
    },
    {
        teamName: "Montana St.",
        seedNumber: 14,
        finalScore: 65,
        icon:null,
    },
    {
        teamName: "Michigan St.",
        seedNumber: 7,
        finalScore: 72,
        icon:null,
    },
    {
        teamName: "Southern California",
        seedNumber:10,
        finalScore: 62,
        icon:null,
    },
    {
        teamName: "Marquette",
        seedNumber: 2,
        finalScore: 78,
        icon:null,
    },
    {
        teamName:"Vermont",
        seedNumber: 15,
        finalScore: 61,
        icon:null,
    },
]

// function getBracket() {
    //     for(i = 0; i < 8; i++) {
        //         let teamASouth = ncaaSouth[0].seedNumber;
        //         console.log(teamASouth);
        //         let teamBSouth = ncaaSouth[0].seedNumber;
        //         console.log(teamBSouth);
        //     }
        
        // }
        
        // getBracket();
        
    }
    function exitPop() {
        let winnersPop = document.getElementById('winnerspopup')
        // let button = document.getElementsByClassName("exitpop");
        winnersPop.style.display = "none";
    }