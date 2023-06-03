
let step1=document.querySelector("#step1")
let step2=document.querySelector("#step2")


let obtainedMarks=document.querySelector("#obtainedMarks")
let totalMarks=document.querySelector("#totalMarks")
let result=document.querySelector("#result")
step1.addEventListener('click',()=>{
    let sub1=parseFloat(document.querySelector("#sub1").value)
    let sub2=parseFloat(document.querySelector("#sub2").value)
    let sub3=parseFloat(document.querySelector("#sub3").value)
    let sub4=parseFloat(document.querySelector("#sub4").value)
  
    let totalMarks=document.querySelector("#totalMarks")
  
   let total=sub1+sub2+sub3+sub4
   totalMarks.innerHTML=total

})




step2.addEventListener('click',()=>{
    let tsub1=parseFloat(document.querySelector("#tsub1").value)
    let tsub2=parseFloat(document.querySelector("#tsub2").value)
    let tsub3=parseFloat(document.querySelector("#tsub3").value)
    let tsub4=parseFloat(document.querySelector("#tsub4").value)
    let obtainedMarks=document.querySelector("#obtainedMarks")
    let obtained=tsub1+tsub2+tsub3+tsub4
    obtainedMarks.innerHTML=obtained
    let total=totalMarks.innerHTML
    let resul=(total/obtained)*100
    result.innerHTML=`${resul}% `

    console.log(resul)
})


const navigateToFormStep = (stepNumber) => {
   
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
   
    for (let index = 0; index < stepNumber; index++) {
       
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
       
        if (formStepCircle) {
            
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};

document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
   
    formNavigationBtn.addEventListener("click", () => {
        
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        
        navigateToFormStep(stepNumber);
    });
});