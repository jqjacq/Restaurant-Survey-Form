const serviceRate=document.getElementById("service-rate")
const qualityRate=document.getElementById("foodquality-rate")
const rate=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function ratings() {
        for (i=0; i < rate.length; i++) {
           const newServiceRate = document.createElement("input")
           newServiceRate.setAttribute("type", "radio")
           newServiceRate.setAttribute("name", "ratings")
           serviceRate.appendChild(newServiceRate)
           serviceRate.style.display="inline-block"
           serviceRate.style.margin="0 10px 0 10px"
           serviceRate.innerHTML+=rate[i]
           
           const newQualityRate=document.createElement("input")
           newQualityRate.setAttribute("type", "radio")
           newQualityRate.setAttribute("name", "ratings")
           qualityRate.appendChild(newQualityRate)
           qualityRate.innerHTML+=rate[i]
           qualityRate.style.display="inline-block"
           qualityRate.style.padding="0 10px 0 10px"
        }
}
ratings()

const aboutUs=document.querySelector(".aboutus")
const learnAboutus=["Friends/Family",
                        "Social Media", 
                        "Blogs", 
                        "Search Engine", 
                        "News", 
                        "Advertisement", 
                        "Event", 
                        "Others"]
function learn() {
        for (i=0; i < learnAboutus.length; i++) {
           const newLearn=document.createElement("input")
           newLearn.setAttribute("type", "checkbox")
           newLearn.setAttribute("name", "learnOptions")
           aboutUs.appendChild(newLearn)
           aboutUs.innerHTML+=learnAboutus[i]
        }
}   
learn()