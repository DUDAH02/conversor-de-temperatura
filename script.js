const form = document.querySelector('#form')
        //selecionando o input de entrada (Celcius)
        const entrada = document.querySelector('#temp-c')


        //selecionando o input de saída Fahrenheit
        const inputF = document.querySelector('#temp-f')
        //selecionando o input de saída Kelvin
        const inputK = document.querySelector('#temp-k')
        //selecionando o input de saída Rankine
        const inputR = document.querySelector('#temp-r')
        //selecionando o botão
        const btn = document.querySelector('#submit')

        //evento para não enviar o formulário
        form.addEventListener('submit', (event) => {
            event.preventDefault()  
        })
        //evento ao clicar no botão
        btn.addEventListener('click', () => {
            //value do input Celcius
            const valorInput = parseFloat(entrada.value)

            if(!valorInput){
                alert("Preencha: Temperatura em Célcius");
                entrada.focus();
                return false;
            }
            
            //cálculo Fahrenheit
            let resultadoF = inputF
            resultadoF.value = (valorInput*1.8) + 32
            
            //cálculo Kelvin
            //K = C + 273,15
            let resultadoK = inputK
            resultadoK.value = valorInput + 273.15

            //cálculo Kelvin
            //Formula = (1 °R − 491,67) × 5/9 = -272,6 °C
            let resultadoR = inputR
            resultadoR.value = (valorInput + 273.15) * 1.8;
        })