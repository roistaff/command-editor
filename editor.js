        let swi = 1;
        let target = document.getElementById('hoge');
        let str = target.value;
    function keyDown(event){
         let push_key = event.key;
         let target = document.getElementById('hoge');
         let anext = target.value.substr(0, target.selectionStart);
         let lucky = Math.floor(Math.random() *15) + 1;
         let len = document.getElementById("hoge").value.length;
           document.getElementById("count").innerText = len ;
        let lines = target.value.split(/\r*\n/).length;
         if (push_key == 'Enter'){
                    let str = target.value;
             if(anext.indexOf('/kill();') != -1){
                 event.preventDefault();
                 const really =confirm('REALLY KILL?');
                 if(really == true){target.value = "";}
                 }else if(anext.indexOf('/copy();') != -1){
                    target.value = str.replace('/copy();', '');
                 navigator.clipboard.writeText(target.value).then(() => {
                 console.log("ok");
                }, () => {
                    target.select();
                 document.execCommand("copy");
                });
                 }else if(anext.indexOf('/paste();') != -1){
                    target.value = str.replace('/paste();', '');
                  navigator.clipboard.readText().then(
                    (clipText) => target.value = target.value.substr(0, target.selectionStart) + clipText +  target.value.substr(target.selectionStart));
                 }else if(anext.indexOf('/print();') != -1){
                    target.value = str.replace('/print();', '');
                    window.print();
                 }else if(anext.indexOf('/save();') != -1){
                    let code = str.replace('/save();', '');
                     localStorage.setItem('myCode', code);
                     target.value = str.replace('/save();', '');
                 }else if(anext.indexOf('/input();') != -1){
                     let inputcode = localStorage.getItem('myCode');
                     target.value = inputcode ;
                     if(inputcode == null ){
                    target.value = str.replace('/input();', '');
                    target.value = target.value.substr(0, target.selectionStart) +'! No found storage. !'+  target.value.substr(target.selectionStart);
                    window.setTimeout(function(){
                    target.value = str.replace('! No found storage. !', '');}, 2000);
                     }else{target.value = inputcode ;}
                 }else if(anext.indexOf('/down(html);') != -1){
                    target.value = str.replace('/down(html);', '');
                    const html = target.value;
                    const blob = new Blob([html], { type: "html/plain" }); 
                    const a = document.createElement("a"); 
                    a.href = URL.createObjectURL(blob); 
                    const file_name = prompt('file name');
                    a.download = file_name+".html";
                    a.click();
                 }else if(anext.indexOf('/down(txt);') != -1){
                    target.value = str.replace('/down(txt);', '');
                    const txt = target.value;
                    const blob = new Blob([txt], { type: "txt/plain" }); 
                    const a = document.createElement("a"); 
                    a.href = URL.createObjectURL(blob); 
                    const file_name = prompt('file name');
                    a.download = file_name+".txt";
                    a.click();
                 }else if(anext.indexOf('/day();') != -1){
                    let z = new Date();
                    let year  = z.getFullYear();
                    let month =z.getMonth()+1;
                    let day = z.getDate();
                    let time = year+'/'+month+'/'+day;
                    target.value = str.replace('/day();',time);
                 }else if(anext.indexOf('/setfont();') != -1){
                    const size =prompt('font size');
                    target.value = str.replace('/setfont();', '');
                    target.style.fontSize = size+'px';
                 }else if(anext.indexOf('/fortune();') != -1){
                     target.value = target.value.substr(0, target.selectionStart) +'    ==> Your lucky number is ' + lucky +  target.value.substr(target.selectionStart);
                 }else if(anext.indexOf('/search();') != -1){
                     　　event.preventDefault();
                        const pos = target.selectionStart;
                        let stext = prompt('search text');
                        stext =stext.toLowerCase();
                        let str = target.value.toLowerCase();
                        const place = str.indexOf(stext,pos);
                        if(place != -1){
                        const placedown = place + stext.length;
                        target.focus();
                        target.setSelectionRange(place, placedown);
                        }else{
                            alert('NO FOUND');}
                 }else if(anext.indexOf('/welcome();') != -1){
                     target.readOnly = true;
                    target.value ='Hello,World! \n Welcome to Command Editor.Plese write Commands,and get your results.\n Commands \n /kill(); \n /copy(); \n /paste(); \n /print(); \n /save(); \n /input(); \n /fortune(); \n /down(html); \n /down(txt); \n /day(); \n /line(); \n /setfont(); \n This screen keeps 6 secounds.';
                    window.setTimeout(function(){target.value = "Let's start!!";
                        target.readOnly = false;
                    }, 6000);
                 }else if(anext.indexOf('/game();') != -1){
                     target.value = str.replace('/game();', '');
                     game();
                 }else if(anext.indexOf('/line();') != -1){
                     target.value = str.replace('/line();', '');
                     line();
                 }
         }else if(push_key == 'Tab'){
             event.preventDefault();
             target.value = target.value.substr(0, target.selectionStart) +'\t'+  target.value.substr(target.selectionStart);
         } 
         }
         let textarea = document.getElementById('hoge');
         textarea.addEventListener('keydown', keyDown);
         function game(){
            let target = document.getElementById('hoge');
             let str = target.value;
             str = '';
             line();
             line('War Games');
             line('Hey!');
         }
         function line(linetxt){
            let area = target.clientWidth;
            const po = Math.trunc(area / 25 * 2 - 2);
            let line1 = '-';
            let linese =line1.repeat(po);
            if(linetxt == undefined){
                linetxt ='';
            };
            target.value = target.value.substr(0, target.selectionStart)+linetxt+'\n'+linese+  target.value.substr(target.selectionStart);
         }
          function brink(txt){
             let suck = '_';
             const uck = suck.repeat(txt.length);
             if(swi == 1){
                 return;
             }else{
            window.setInterval(function(){
            target.value = str.replace(txt,uck);
            window.setTimeout(function(){
            target.value = str.replace(uck,txt);
            }, 500);
                            }, 1000);};
                    }
             function start(){
                 target.readOnly = true;
                 target.value ="Loading...";
                window.setTimeout(function(){let d = new Date();
                    target.value =target.value+'\n'+d.toString();}, 1500);
                window.setTimeout(function(){target.value =target.value+'\n User information:'+navigator.userAgent;}, 2000);
                window.setTimeout(function(){target.value =target.value+'\n User device information: width:'+screen.width+', height:'+screen.height;}, 3000);
                window.setTimeout(function(){target.value =target.value+'\n Github : https://github.com/roistaff/command-editor';}, 3500);
                window.setTimeout(function(){target.readOnly = false;
                    target.value ='';
                    target.focus();
                }, 6000);
             };
　　　　　　　window.onload = start;
