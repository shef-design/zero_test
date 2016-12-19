document.addEventListener('DOMContentLoaded',
    function (){
        let isCanvas = this.createElement('canvas').getContext ? 1 : 0;

        let form = this.createElement('form');
        form.innerHTML = `<input type="hidden" value="${isCanvas}"/>`;

        let input = this.createElement('input');
        input.type = 'text';
        input.addEventListener('input', onChange, false);
        form.appendChild(input);

        let informer = this.createTextNode('');
        form.appendChild(informer);

        this.body.appendChild(form);

        function onChange() {
            informer.nodeValue = getGroup(this.value);
        }

        function getGroup(str){
            let group = 'd';

            switch (str[0]){
                case '1':
                    group = 'a';
                    break;

                case '3':
                    let result = secondChar(str[1]);
                    if (result !== null){
                        group = result;
                    }

                    break;
            }

            return group;
        }

        function secondChar(char){
            let num = +char;

            if (isNaN(num)){
                return null;
            }

            switch (num){
                case 2:
                case 6:
                    return 'b';

                default:
                    return 'c';
            }
        }
    },
    false);
