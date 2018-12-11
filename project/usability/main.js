//kopier tekst
            function copyText(type) {
                var typeText = 'copy-'
                typeText += type;
                var text = document.getElementById(typeText);
                var textValue;
                var isLong = false;
                
                if (type == 'long') {
                    textValue = text.innerHTML;
                    var copyHelper = document.createElement("input");
                    copyHelper.className = "copyhelper";
                    document.body.appendChild(copyHelper);
                    copyHelper.value = textValue;
                    copyHelper.select();
                    isLong = true;
                } else {
                    text.select();
                }
                
                document.execCommand("Copy");

                if (isLong) 
                    // document.body.removeChild(copyHelper);

                console.log(text);
            }

            //klikbare menus
            var menuItems = document.getElementsByClassName('isClicked');
            var clickedHelper = document.getElementById('isClicked');
            
            for (var x = 0; x < menuItems.length; x++) {
                menuItems[x].addEventListener("mousedown", statusClicked, false);
            }

            for (var x = 0; x < menuItems.length; x++) {
                menuItems[x].addEventListener("mouseup", statusNotClicked, false);
            }

            function statusClicked(){
                clickedHelper.innerHTML = 'JA';
                clickedHelper.className = 'ja';
            }

            function statusNotClicked() {
                clickedHelper.innerHTML = 'NEE';
                clickedHelper.className = 'nee';
            }

            //auto top knop
            var topKnop = document.getElementById('auto-knop');

            topKnop.addEventListener('mouseover', function() {
                topKnop.src = 'img/arrow_active.png';
            }, false);

            topKnop.addEventListener('mouseout', function(){
                topKnop.src = 'img/arrow_unactive.png';
            }, false);

            topKnop.addEventListener('click', function() {
                document.body.scrollTop = 0;
            }, false);