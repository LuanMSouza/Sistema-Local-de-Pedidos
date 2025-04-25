# 🛒 Sistema Local de Pedidos

Sistema simples e funcional para lojas que registram pedidos e salvam localmente as informações. Ideal para uso em balcão ou escritório, com organização clara e rápida de pedidos do dia.

---

## 🚩 Problema que resolve

**Antes:**
- Pedidos anotados no papel
- Arquivos soltos no computador
- Sem padrão nos registros
- Dificuldade em consultar ou organizar

**Depois:**
- Interface simples para preencher pedidos
- Arquivos gerados automaticamente com data e conteúdo organizado
- Histórico acessível pelo próprio sistema
- Possibilidade de marcar pedidos como "Concluídos"

---

## ⚙️ Funcionalidades

- Campo para adicionar pedidos individualmente
- Botão para salvar todos os pedidos de um dia em um arquivo `.txt`
- Arquivos nomeados pela data
- Controle para evitar sobrescritas
- Visualização de todos os pedidos já salvos
- Botão "Concluir" que renomeia o arquivo para indicar finalização

---

## 🧱 Estrutura de pastas

📦 sistema-local-de-pedidos  
├── 📄 index.html (interface do sistema)  
├── 📄 server.js (backend em Node.js com Express)  
├── 📁 node_modules  
├── 📄 package.json  
├── 📁 notas (arquivos `.txt` dos pedidos)

---

## 📌 Observações

- O CSS está escrito diretamente no `index.html` para facilitar o uso e transporte do sistema.
- Todos os arquivos de pedidos ficam salvos na pasta `notas`.

---

## 🧑‍💻 Autor

Desenvolvido por **Luan Souza**  
🔗 [www.luansouzadev.com.br](https://www.luansouzadev.com.br)  
Sistema real, testado e usado localmente.

---

Este sistema é propriedade intelectual de Luan Souza.  
Todos os direitos reservados. O uso, cópia ou redistribuição sem autorização é proibido.
