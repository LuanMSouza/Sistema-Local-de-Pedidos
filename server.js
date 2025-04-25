const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

const port = 1234

function gerarNome(base, pasta, extensao = 'txt') {

    let nome = `${base}.${extensao}`;
    let contador = 2;

    while (fs.existsSync(path.join(pasta, nome))) {
        nome = `${base} (${contador}).${extensao}`;
        contador++;
    }

    return path.join(pasta, nome);
}

app.post('/pedidos', (req, res) => {

    console.log('recebendo dados...');
    const pedido = req.body

    if (!pedido?.pedido || !Array.isArray(pedido.pedido) || !pedido.data) {
        return res.status(400).json('Dados inválidos');
    }

    const dataArray = pedido.data.split('-')

    const dataCerta = `${dataArray[2]}-${dataArray[1]}-${dataArray[0]}`


    const pasta = 'Notas'
    const nomeArquivo = gerarNome(dataCerta, pasta)


    fs.writeFile(nomeArquivo, ``, (err) => {
        if (err) {
            console.log(err);
        }

        pedido.pedido.forEach(linha => {
            fs.appendFile(nomeArquivo, `\n${linha}`, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        });

        res.status(201).json('Arquivo criado com sucesso!')

    })
})

app.get('/pedidos', (req, res) => {
    const arquivos = fs.readdirSync('notas');

    let arquivosArray = [];

    arquivos.forEach(arquivo => {
        try {
            const data = fs.readFileSync(`notas/${arquivo}`, 'utf-8');

            arquivosArray.push({ nome: arquivo, pedido: data });

        } catch (err) {
            console.log(err);
        }
    });

    res.status(200).json(arquivosArray)

})

app.put('/pedidos/:nome', (req, res) => {
    const { nome } = req.params

    fs.rename(`notas/${nome}`, `notas/CONCLUIDO --- ${nome}`, (err) => {
        if (err) {
            console.log(err);
            res.status(200).json('erro inesperado')
            return
        }
    })

    res.status(204).end()
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

})