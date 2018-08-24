window.onload=function () {

  let bannerimgs=document.querySelectorAll(".banner-img li");
  let switchover=document.querySelector(".switchover");
    let switchoverr=document.querySelector(".switchoverr");
    let roundframes=document.querySelectorAll(".Round-frame ul li");
    let flag=true;

    console.log(bannerimgs,switchover,switchoverr,roundframes);


  // let t1=setInterval(mover,2000);
  //   function move(){
  //
  //   }

    // for(let i=0;i<bannerimgs.length;i++){
    //     bannerimgs[i].style.left="1226px";
    // }

    let now=next=0;

    function mover() {


      next++;
      if(next==bannerimgs.length){
        next=0;
      }
        bannerimgs[next].style.left="1226px";
        animate(bannerimgs[now],{left:-1226});
        animate(bannerimgs[next],{left:0},function () {
            flag=true;

        });
      // bannerimgs[now].left="0";
      // bannerimgs[next].left="1226px";
        roundframes[now].classList.remove("hot");
        roundframes[next].classList.add("hot");

        now=next;

    }
    switchoverr.onclick=function () {
        if(flag==false){
            return;
        }
        if(next==bannerimgs.length-1){
            return;
        }
        flag=false;
        mover();

    };
    switchover.onclick=function movel() {
        if(flag==false){
            return;
        }
        if(next==0){
            return;
        }
        flag=false;
      // clearInterval(t1);
      //   switchover.onmouseleave=function () {
      //       t1=setInterval(mover,2000);
      //
      //   }


        next--;
        if(next<0){
            next=bannerimgs.length-1;
        }
        bannerimgs[next].style.left="-1226px";
        animate(bannerimgs[now],{left:1226});
        animate(bannerimgs[next],{left:0},function () {
            flag=true;

        });
        roundframes[now].classList.remove("hot");
        roundframes[next].classList.add("hot");
        // bannerimgs[now].left="0";
        // bannerimgs[next].left="1226px";
        now=next;


    }


    // bannerimgs.forEach(function (v,i) {
    //     v.onmouseenter=function () {
    //         clearInterval(t1);
    //
    //     }
    //     v.onmouseleave=function () {
    //         t1=setInterval(mover,2000);
    //
    //     }
    //
    // })

    roundframes.forEach(function (v,i) {
        v.onclick=function () {
            // v.style.background="#fff";
            // animate(bannerimgs[i],{left:0});

            if(now==i){
                return;
            }else if(now<i){
                bannerimgs[i].style.left="1226px";
                animate(bannerimgs[now],{left:-1226});
                animate(bannerimgs[i],{left:0});
                roundframes[now].classList.remove("hot");
                roundframes[i].classList.add("hot");


            }else{
                bannerimgs[i].style.left="-1226px";
                animate(bannerimgs[now],{left:1226});
                animate(bannerimgs[i],{left:0});
                roundframes[now].classList.remove("hot");
                roundframes[i].classList.add("hot");

            }
            now=next=i;
        }

    })










}