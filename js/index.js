window.onload=function () {

  let bannerimgs=document.querySelectorAll(".banner-img li");
  let switchover=document.querySelector(".switchover");
    let switchoverr=document.querySelector(".switchoverr");
    let roundframes=document.querySelectorAll(".round-frame");
    console.log(bannerimgs,switchover,switchoverr);


  let t1=setInterval(mover,2000);
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
        animate(bannerimgs[next],{left:0});
      // bannerimgs[now].left="0";
      // bannerimgs[next].left="1226px";
        now=next;

    }
    switchoverr.onclick=mover;
    switchover.onclick=function movel() {
      clearInterval(t1);
        switchover.onmouseleave=function () {
            t1=setInterval(mover,2000);

        }

        next--;
        if(next<0){
            next=bannerimgs.length-1;
        }
        bannerimgs[next].style.left="-1226px";
        animate(bannerimgs[now],{left:1226});
        animate(bannerimgs[next],{left:0});
        // bannerimgs[now].left="0";
        // bannerimgs[next].left="1226px";
        now=next;

    }


    bannerimgs.forEach(function (v,i) {
        v.onmouseenter=function () {
            clearInterval(t1);

        }
        v.onmouseleave=function () {
            t1=setInterval(mover,2000);

        }

    })

    roundframes.forEach(function (v,i) {
        v.onclick=function () {
            v.style.background="#fff";
            animate(bannerimgs[i],{left:0});
        }
        // if(i>now){
        //     mover();
        //
        // }else{
        //     movel();
        // }

    })










}