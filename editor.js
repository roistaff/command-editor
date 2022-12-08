    function keyDown(event){
         let push_key = event.key;
         let target = document.getElementById('hoge');
         let anext = target.value.substr(0, target.selectionStart);
         let lucky = Math.floor(Math.random() *15) + 1;
         let len = document.getElementById("hoge").value.length;
           document.getElementById("count").innerText = len ;
        const dialog = document.getElementById('dg1');
         if (push_key == 'Enter'){
                    let str = target.value;
             if (anext.indexOf('/kill();') != -1){alert('KILL!');
                 target.value = '';
                 }else if(anext.indexOf('/copy();') != -1){
                    target.value = str.replace('/copy();', ''); 
                 navigator.clipboard.writeText(target.value).then(() => {
                 console.log("ok");
                }, () => {
                    target.select();
                 document.execCommand("copy");
                 target.blur();
                });
                 }else if(anext.indexOf('/paste();') != -1){
                    target.value = str.replace('/paste();', '');
                  navigator.clipboard.readText().then(
                    (clipText) => target.value = target.value.substr(0, target.selectionStart) + clipText +  target.value.substr(target.selectionStart));
                 }else if (anext.indexOf('/print();') != -1){
                    window.print();
                    target.value = str.replace('/print();', '');
                 }else if(anext.indexOf('/save();') != -1){
                    let code = str.replace('/save();', '');
                     localStorage.setItem('myCode', code);
                     target.value = str.replace('/save();', '');
                 }else if (anext.indexOf('/input();') != -1){
                     let inputcode = localStorage.getItem('myCode');
                     target.value = inputcode ;
                     if (inputcode == null ){
                    target.value = str.replace('/input();', '');
                    target.value = target.value.substr(0, target.selectionStart) +'! No found storage. !'+  target.value.substr(target.selectionStart);
                    window.setTimeout(function(){
                    target.value = str.replace('! No found storage. !', '');}, 3000);
                     }else{target.value = inputcode ;}
                 }else if(anext.indexOf('/down(html);') != -1){
                    target.value = str.replace('/down(html);', '');
                    const html = target.value;
                    const blob = new Blob([html], { type: "html/plain" }); 
                    const a = document.createElement("a"); 
                    a.href = URL.createObjectURL(blob); 
                    a.download = "index.html";
                    a.click();
                 }else if(anext.indexOf('/down(txt);') != -1){
                    target.value = str.replace('/down(txt);', '');
                    const txt = target.value;
                    const blob = new Blob([txt], { type: "txt/plain" }); 
                    const a = document.createElement("a"); 
                    a.href = URL.createObjectURL(blob); 
                    a.download = "index.txt";
                    a.click();
                 }else if(anext.indexOf('/fortune();') != -1){
                     target.value = target.value.substr(0, target.selectionStart) +'    ==> Your lucky number is ' + lucky +  target.value.substr(target.selectionStart);
                 }else if(anext.indexOf('/search();') != -1){
                        const pos = target.selectionStart;
                        let stext = prompt('search text');
                        stext =stext.toLowerCase();
                        let str = target.value.toLowerCase();
                        const place = str.indexOf(stext,pos);
                        if(place == -1){
                            alert('NO FOUND');
                        }else{
                        const placedown = place + stext.length;
                        target.focus();
                        target.setSelectionRange(place, placedown);}
                 }else if(anext.indexOf('/welcome();') != -1){
                    target.value = str.replace('/welcome();', '');
                    target.value ='Hello,World! \n Welcome to Command Editor.Plese write Commands,and get your results.\n Commands \n /kill(); \n /copy(); \n /paste(); \n /print(); \n /save(); \n /input(); \n /cl/fortune(); \n /down(html); \n /down(txt); \n This screen keeps 6 secounds.';
                    window.setTimeout(function(){target.value = "Let's start!!";}, 6000);
                 }else if(anext.indexOf('/close();') != -1){
                     window.close();
                 }
         } 
         }
         let textarea = document.getElementById('hoge');
         textarea.addEventListener('keydown', keyDown);
