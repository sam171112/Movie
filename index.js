const btn1=document.getElementById('btn')
let mainDiv=document.getElementById('mainDiv')
const apikey='2d06511c'
 btn1.addEventListener('click',fetchData)
 
 function fetchData()
 {
     mainDiv.textContent="";
     const in1=document.getElementById('inp').value;
    fetch(`https://www.omdbapi.com/?s=${in1}&apikey=${apikey}`)
   .then(function(res)
   {
       
       return res.json();
   })
   .then(function(data)
   {
         displayData(data.Search)
    
   })
   .catch(function (err)
        {
        console.log("my errors"+err)
        })
 }

 const na="N/A";
 function displayData(val)
 {
    
   val.forEach(function(d1)
   {

    
    console.log(d1)
      const img=document.createElement('img')
      const title=document.createElement('h1')
      const year=document.createElement('h3')
      const type=document.createElement('h3')
      img.classList.add('img')
      title.classList.add('title')
      year.classList.add('year')
      type.classList.add('type')
     const subDiv=document.createElement('div')
     subDiv.classList.add('subDiv')
     
     if(d1.Poster=="N/A")
     {
        img.alt=d1.Title   
        img.style.height="25px"
        img.style.widows="10px"  
 
     }
     else
     {
     img.src=d1.Poster
     img.alt=d1.Title
     }
      title.textContent=d1.Title
      year.textContent="Year : "+d1.Year
      type.textContent=d1.Type
     
      subDiv.append(img,title,year,type)
      mainDiv.appendChild(subDiv)
   })
 }

