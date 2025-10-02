const resultsDiv = document.getElementById('results');


 async function SilksongItens(){
    resultsDiv.innerHTML = "<p>Carregando...<p>";
    
    try {
        const response = await fetch('../Dados/data.json')
        const data = await response.json()
        console.log(data);

        if(data.error){
            resultsDiv.innerHTML = "<p>ERRO AO ACHAR DADOS!<p>";
            return;
        }

        resultsDiv.innerHTML = ''

        data.forEach(item => {
            const card = document.createElement("div");
            card.className = "card"
            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.name}"
                <h2>${item.name}</h2>
                <h3>${item.descricao}</h3>
                <p1>${item.preco.toFixed(2)}</p>
            `       
            resultsDiv.appendChild(card);
        })

    } catch(error) {
        resultsDiv.innerHTML = "<p>ERRO AO ACHAR ITENS!<p>";
    }

}

SilksongItens();