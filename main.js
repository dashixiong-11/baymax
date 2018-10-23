!function(){
    var duration = 10
    function wirteCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = 100000000000000
            if(n<code.length){
                setTimeout(run,duration)
            }else{
                fn&&fn.call()
            }
        },duration)
    }
    let code = `  #baymax{
        margin:0 auto;
        height:600px;
        width:400px;
      }
      
      #head{
        height:64px;
        width:90px;
        border-radius:50%;
        background:#fff;
        margin:0 auto;
        margin-bottom:-20px;
        border-bottom: 5px solid #E0E0E0;
        z-index:100;
        position:relative;
      }
      #eye, #eye:after{
        width:11px;
        height:13px;
        background:#282828;
        border-radius:50%;
        position:relative;
        top:20px;
        left:20px;
        transform:rotate(8deg);
      }
        #eye:after{
          content:'';
          position:absolute;
          left:37px;
          top:-5px;
          transform:rotate(-16deg);
        }
      #mouth{
        width:33px;
        height:1.5px;
        background:#282828 ;
        position:relative;
        left:27px;
        top:13px;
      }
      
      #torso, #belly{
        margin:0 auto;
        height:200px;
        width:180px;
        background:#fff;
        border-radius:50%;
        border: 5px solid #E0E0E0;
        border-top:none;
        z-index:1;
      }
        #belly{
          height:300px;
          width:240px;
          margin-top:-140px;
          z-index:5;
        }
          #cover{
            width:180px;
            background:#fff;
            height:150px;
            margin:0 auto;
            position:relative;
            top:-20px;
            border-radius:50%;
          }
      
      #left-arm, #right-arm{
        height:270px;
        width:100px;
        border-radius:50%;
        background:#fff;
        position:relative;
        top:-350px;
        left:48px;
        transform:rotate(20deg);
        z-index:-1;
      }
        #right-arm{
          transform: rotate(-20deg);
          -webkit-transform:  rotate(-20deg);
          left:250px;
          top:-620px;
        }
          #bigfingerl, #bigfingerr{
            height:50px;
            width:20px;
            border-radius:50%;
            background:#fff;
            position:relative;
            top:250px;
            left:50px;
            transform: rotate(-50deg);
            -webkit-transform:  rotate(-50deg);
          }
          
          #bigfingerr{
            left:32px;
            transform: rotate(50deg);
            -webkit-transform:  rotate(50deg);
          }
            #lilfingerl, #lilfingerr{
              height:30px;
              width:15px;
              border-radius:50%;
              background:#fff;
              position:relative;
              top:195px;
              left:65px;
              transform: rotate(-40deg);
              -webkit-transform:  rotate(-40deg);
            }
              #lilfingerr{
                background:#fff;
                transform: rotate(40deg);
                -webkit-transform:  rotate(40deg);
                top:195px;
                left:22px;
              }
      
      #left-leg, #right-leg{
        height:170px;
        width:90px;
        border-radius:50%;
        background:#fff;
        margin-top:-630px;
        margin-left:110px;
        transform: rotate(-15deg);
        -webkit-transform:  rotate(-15deg);
        z-index:-2;
      }
        #right-leg{
          background: #fff;
          position:relative;
          top:25px;
          left:-15px;
          transform: rotate(30deg);
          -webkit-transform: rotate(30deg);
        }
    `
    wirteCode('',code)
}.call()