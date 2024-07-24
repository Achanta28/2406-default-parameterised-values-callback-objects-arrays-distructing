import React, { useRef } from 'react'

function TenthMarksSheet() {
    let firstNameInputRef= useRef();
    let lastNameInputRef= useRef();
    let teltInputRef= useRef();
    let engtInputRef= useRef();
    let hintInputRef= useRef();
    let mathsInputRef= useRef();
    let sciInputRef= useRef();
    let socInputRef= useRef();
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let telResultRef = useRef();
    let engResultRef = useRef();
    let hinResultRef = useRef();
    let mathsResultRef = useRef();
    let sciResultRef = useRef();
    let socResultRef = useRef();
    let resultParaRef =useRef();
    let passMarks = 35;

  //callBack function
   let calculateTenthResult=
   (telMarks,
    engMarks,
    hindiMarks,
    mathsMarks,
    sciMarks,
    socMarks,
    passFn,
    failFn
)=>{
     let passMarks = 35;
     if(telMarks >= passMarks &&
        engMarks >= passMarks &&
        hindiMarks >= passMarks &&
        mathsMarks >= passMarks &&
        sciMarks >= passMarks &&
        socMarks >= passMarks 


     ){

        passFn();

     }else{
        failFn();

     }

   }
   

   calculateTenthResult(45,35,63,36,77,82,()=>{
    console.log(`student passed in tenth`);
   },
()=>{
    console.log(`student failed in tenth`);
});

//0bject

let sachinDetails={
    fistName :"sachin",
    lastName : "Tendulkar",
    age :50,
    location : "Mumbai",
    awards : "Bharatarathna",
    telMarks : 94,
    engMarks : 56,
    hindiMarks : 65,
    mathsMarks : 94,
    sciMarks : 100,
    socMarks : 94,
    aboutSachin : () =>{
        console.log('Sachin  tendulkar is only bhrataratna criketer in india')
    }
}
console.log(sachinDetails.fistName);
console.log(sachinDetails["fistName"]);

let viratDetails = {
    firstName : "Virat",
    lastName : "Kohli",
    age : 29,
    location : "Delhi",
    awards : "Arjuna",
    telMarks : 94,
    engMarks : 56,
    hindiMarks : 63,
    mathsMarks : 36,
    sciMarks : 56,
    socMarks : 63,
    aboutVirat : ()=>{
        console.log('one of the best players in world cricket')
    }
}


let calTenthResults= (studentDetails)=>{
    let passMarks = 35;
    if(
    studentDetails.telMarks >= passMarks &&
    studentDetails.engMarks >= passMarks &&
    studentDetails.hindiMarks >= passMarks &&
    studentDetails.mathsMarks >= passMarks &&
    studentDetails.sciMarks >= passMarks &&
    studentDetails.socMarks >= passMarks ){
       console.log(`${studentDetails.firstName} ${studentDetails.lastName} passed in tenth`)
    }else {
        console.log(`${studentDetails.firstName} ${studentDetails.lastName} failed in tenth`)
    }


}

calTenthResults(viratDetails);
calTenthResults(sachinDetails);

 
console.log(sachinDetails.awards);
sachinDetails.aboutSachin();
console.log(viratDetails.age);
viratDetails.aboutVirat();

if(sachinDetails.age>viratDetails.age){
console.log('sachin is senior');
}else{
    console.log('viart is senior')

}

//Distructing Objects


// let sachinTelMarks = sachinDetails.telMarks;
// let sachinengMarks = sachinDetails.hindiMarks;
// let sachinTmathsMarks = sachinDetails.mathsMarks;


let{
    telMarks:sachinTelMarks,
    engMarks:sachinEngMarks,
    hindiMarks :sachinHindiMarks,
    mathsMarks:sachinMathMarks,
    sciMarks:sachinSciMarks,
    socMarks:sachinSocMarks

} = sachinDetails;
   
   
console.log(sachinMathMarks,sachinTelMarks,sachinSciMarks,sachinSocMarks,sachinHindiMarks,sachinEngMarks);



//Arrays
let dhoniDetails = [
    "Mahendra Singh",
    "Dhoni",
    42,
    "JharKhand",
    81,
    63,
    45,
    55,
    65,
    52

]

console.log(dhoniDetails);

//Distructing array
let[dhoniFirstName,
    dhoniLastName,
    age,
    state,
    ,
    engMarks,
    hindiMarks,
    mathsMarks,
    ,
    socMarks
] = dhoniDetails;

console.log(
    dhoniFirstName,
    dhoniLastName,
    age,
    state,
    engMarks,
    hindiMarks,
    mathsMarks,
    socMarks
);

//tenthMarkSheet
   let calculateResult =()=>{
    let firstNameMarks = firstNameInputRef.current.value;
                 let lastNameMarks = lastNameInputRef.current.value;
                 let telMarks = Number(teltInputRef.current.value);
                 let hinMarks = Number(hintInputRef.current.value);
                 let engMarks = Number(engtInputRef.current.value);
                 let mathsMarks = Number(mathsInputRef.current.value);
                 let sciMarks =Number(sciInputRef.current.value);
                 let socMarks = Number(socInputRef.current.value);
 
                 let totalMarks =telMarks+hinMarks
                 +engMarks+mathsMarks+sciMarks+socMarks;
                 let result;
 
                 if(telMarks < passMarks|| hinMarks < passMarks || engMarks < passMarks ||mathsMarks<passMarks||sciMarks<passMarks||socMarks<passMarks){
                     result ="Failed";
 
                 }else{
                     result="Passed";
                 }
               
                 resultParaRef.current.innerHTML=`${firstNameMarks} ${lastNameMarks} ${result} in tenth got total marks of    ${totalMarks} `;

   }


   //onFocus
   let inputOnFocus = (inputRef,bgColor="orange",color="black") =>{
    inputRef.current.style.backgroundColor=bgColor;
    inputRef.current.style.color=color;
   }
   //onChange
   let inputOnChange = (inputRef,resultSpanRef,) =>{
    if(inputRef.current.value >=0 && 
        inputRef.current.value<=100){
            if(inputRef.current.value >= passMarks ){
                resultSpanRef.current.innerHTML="pass";
                resultSpanRef.current.style.backgroundColor="green";

            }else{
                resultSpanRef.current.innerHTML="Fail";
                resultSpanRef.current.style.backgroundColor="red";

            }

    }else{
        resultSpanRef.current.innerHTML="Invalid";
        resultSpanRef.current.style.backgroundColor="Purple";

    }


   }

    //onBlur
    let inputOnBlur = (inputRef,color="black") => {
        inputRef.current.style.backgroundColor="";
        inputRef.current.style.color=color;
    }
  
   

 

  
   
return (
    <div>
        <form className='form'>
            <h1 className='mainHeading'>Tenth Results</h1>
        <div className='formDiv'>
            <label className='formLabel'>FirstName</label>
            <input type='text' ref={firstNameInputRef}
            onFocus={()=>{
                inputOnFocus(firstNameInputRef,"violet","white");
                
            }}
           
            onBlur={()=>{
                inputOnBlur(firstNameInputRef);
            }}></input>
            <span ref={firstNameResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>LastName</label>
            <input type='text' ref={lastNameInputRef}
            onFocus={()=>{
                inputOnFocus(lastNameInputRef,"blue","white");
            }}
            
            onBlur={()=>{
                inputOnBlur(lastNameInputRef);
            }}></input>
            <span ref={lastNameResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Telugu</label>
            <input type='number' ref={teltInputRef}
            onFocus={()=>{
                inputOnFocus(teltInputRef,"aqua","white"); 
            }}
            onChange={()=>{ 
                inputOnChange(teltInputRef,telResultRef)
            }}
            onBlur={()=>{
                inputOnBlur(teltInputRef);
                }}></input>
            <span ref={telResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>English</label>
            <input type='number' ref={engtInputRef}
             onFocus={()=>{
              
                inputOnFocus(engtInputRef,"grey","white"); 
            }}
            onChange={()=>{
                inputOnChange(engtInputRef,engResultRef);
               }}
            onBlur={()=>{
                inputOnBlur(engtInputRef);
         }}></input>
            <span ref={engResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Hindi</label>
            <input type='number' ref={hintInputRef}
            onFocus={()=>{
                inputOnFocus(hintInputRef,"yellow");
               }}
            onChange={()=>{
                inputOnChange(hintInputRef,hinResultRef);
                }}
            onBlur={()=>{
                inputOnBlur(hintInputRef);
               
            }}></input>
            <span ref={hinResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Maths</label>
            <input type='number' ref={mathsInputRef}
            onFocus={()=>{
                inputOnFocus(mathsInputRef)
               }}
            onChange={()=>{
                inputOnChange(mathsInputRef,mathsResultRef);
               }}
            onBlur={()=>{
                inputOnBlur(mathsInputRef);
                
            }}></input>
            <span ref={mathsResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel' >Science</label>
            <input type='number' ref={sciInputRef}
            onFocus={()=>{
                inputOnFocus(sciInputRef)
            }}
            onChange={()=>{
                inputOnChange(sciInputRef,sciResultRef);
                }}
            onBlur={()=>{
                inputOnBlur(sciInputRef);
                
            }}></input>
            <span ref={sciResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Social</label>
            <input type='number' ref={socInputRef}
             onFocus={()=>{
                inputOnFocus(socInputRef)
             }}
            onChange={()=>{
                inputOnChange(socInputRef,socResultRef);
            }}
            onBlur={()=>{
                inputOnBlur(socInputRef);
               
            }}></input>
            <span ref={socResultRef}></span>
        </div>
        <p ref={resultParaRef}>Please Enter Values And Calculate Results</p>
        <div className='formDiv'>
            <button type='button' onClick={()=>{
                 calculateResult();
                 }}>CalculateResult</button>
        </div>
        </form>
       
    </div>
  )
}



export default TenthMarksSheet