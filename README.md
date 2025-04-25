# 🛒 Sistema Local de Pedidos

Sistema simples e funcional para lojas que registram pedidos e salvam localmente as informações. Ideal para uso em balcão ou escritório, com organização clara e rápida de pedidos do dia.

---

## 🚩 Problema que resolve

Antes:
- Pedidos anotados no papel
- Arquivos soltos no computador
- Sem padrão nos registros
- Dificuldade em consultar ou organizar

Depois:
- Interface para preencher os pedidos
- Arquivos gerados automaticamente com data e conteúdo organizado
- Histórico acessível pelo próprio sistema
- Possibilidade de marcar pedidos como "Concluídos"

---

## ⚙️ Funcionalidades

- Campo para adicionar pedidos individualmente
- Botão para salvar todos os pedidos de um dia em um arquivo `.txt`
- Os arquivos são nomeados pela data do pedido, com controle automático para evitar sobrescritas
- Visualização de todos os pedidos já salvos
- Botão "Concluir" que renomeia o arquivo para indicar que o pedido foi finalizado

---

## 🧱 Estrutura de pastas

📦 sistema-pedidos  
├── 📁 Notas  
│   └── Arquivos `.txt` gerados com os pedidos  
├── 📁 public  
│   ├── index.html (interface do sistema)  
│   └── script.js (lógica do frontend)  
├── 📄 server.js (backend Node.js com Express)  
├── 📄 package.json  
├── 📄 README.md (este arquivo)

---

## 📌 Observações

- O CSS foi escrito inline de forma proposital, para facilitar o transporte e edição rápida do sistema.
- Todos os pedidos ficam salvos localmente na pasta `Notas`.

---

## 🧑‍💻 Autor

Desenvolvido por **Luan Souza**  
🔗 [www.luansouzadev.com.br](https://www.luansouzadev.com.br)  
Sistema real, testado e usado localmente.

---

Este sistema é propriedade intelectual de Luan Souza.  
Todos os direitos reservados. O uso, cópia ou redistribuição sem autorização é proibido.

------------------------------

# 🛒 Local Order System

A simple and functional solution for local businesses to register and organize orders. Perfect for physical stores or internal use. Clean and efficient interface with local file storage.

---

## 🚩 Problem it solves

Before:
- Orders written on paper
- Disorganized files on the computer
- No consistency in records
- Hard to find or finalize orders

After:
- Interface to input daily orders
- Automatic `.txt` file generation with proper naming
- Easy access to all saved orders
- "Mark as Done" feature that renames the file to indicate completion

---

## ⚙️ Features

- Add orders one by one through the interface
- Save button creates a file named after the date
- Automatic renaming if a file with the same name exists
- All orders are listed and readable
- Mark orders as "Done" to rename the file accordingly

---

## 🧱 Folder structure

📦 order-system  
├── 📁 Notas  
│   └── `.txt` files with order details  
├── 📁 public  
│   ├── index.html (system UI)  
│   └── script.js (frontend logic)  
├── 📄 server.js (Node.js backend with Express)  
├── 📄 package.json  
├── 📄 README.md (this file)

---

## 📌 Notes

- CSS was written inline **intentionally**, for easier editing and portability.
- All orders are saved locally in the `Notas` folder.

---

## 🧑‍💻 Author

Developed by **Luan Souza**  
🔗 [www.luansouzadev.com.br](https://www.luansouzadev.com.br)  
Real system, locally tested and used.

---

This system is the intellectual property of Luan Souza.  
All rights reserved. Unauthorized use, copy or distribution is prohibited.
