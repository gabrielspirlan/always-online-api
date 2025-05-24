# 🔄 Always Online Api – Monitoramento de APIs com Node.js

Este projeto é um pequeno servidor em Node.js que faz chamadas periódicas para até **3 APIs externas** com o objetivo de:

- Manter servidores "acordados" (como serviços gratuitos que entram em modo sleep);
- Verificar se as APIs estão online (health check);
- Logar status de forma simples no console.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-keeper.git
cd api-keeper
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo .env na raiz do projeto com os links das APIs que deseja manter ativas:

```env
APP_01=https://minha-api-1.com/health
APP_02=https://minha-api-2.com/health
APP_03=https://minha-api-3.com/health
```
Você pode utilizar de 1 a 3 APIs.


## ▶️ Como executar
Para iniciar o monitoramento:

```bash
node index.js
```

Você verá no console mensagens indicando que o servidor foi iniciado e que cada API está sendo monitorada a cada 5 minutos (300.000ms):

```bash
Servidor iniciado
API 01
API 02
API 03
{ status: 'ok' }
```

## ⚙️ Configurações adicionais

- O intervalo de chamadas está definido para 5 minutos (300.000 ms).
- Todas as respostas ou erros são logados diretamente no console.
- Arquivo .env está no .gitignore por segurança.

## ✍️ Autor
Gabriel Resende Spirlandelli
Aluno da FATEC Franca | Desenvolvimento de Software Multiplataforma
