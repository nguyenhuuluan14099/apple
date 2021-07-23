document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelectorAll("._3nut ul li");
    var slides = document.querySelectorAll(".fullscreen ul li");
    var thoigian = setInterval(function(){autoSlide();},2500);
    for(var i  =0; i<nut.length;i++)
    {
        nut[i].addEventListener("click",function(){
            clearInterval(thoigian);
            /* console.log("click"); */
            for(var a = 0;a<nut.length;a++)
            {
                nut[a].classList.remove("active");
            }
            this.classList.add("active");
            //chuyen slides
            var vitri  = this;
            for(var vtslides = 0;vitri = vitri.previousElementSibling;vtslides++)
            {
                console.log(vtslides);
            }
            for(var x =  0; x<nut.length;x++)
            {
                slides[x].classList.remove("active");
                slides[vtslides].classList.add("active");
            }
        })//ket thuc hieu ung
        //xu ly ham autorun
        function autoSlide()
        {
            //lay nut active
            var nut1 = document.querySelector(".fullscreen ul li.active");
            for(var vitri = 0;nut1 = nut1.previousElementSibling;vitri++)
            {
                
            }
            //neu như chạy hết 3 nut thì quay lại chạy từ số 0
            if(vitri <(slides.length)-1)
            {
                for(var a = 0;a<nut.length;a++)
                {
                    slides[a].classList.remove("active");
                    nut[a].classList.remove("active");
        
                }
                slides[vitri].nextElementSibling.classList.add("active");
                nut[vitri].nextElementSibling.classList.add("active");
            }else{
                for(var a = 0;a<nut.length;a++)
                {
                    slides[a].classList.remove("active");
                    nut[a].classList.remove("active");
                }
                slides[0].classList.add("active");
                nut[0].classList.add("active");
            }
      

        }
    }





},false)