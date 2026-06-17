# Calculadora de Hipotenusa

Uma calculadora interativa e elegante que utiliza uma fórmula matemática personalizada para calcular a hipotenusa de um triângulo retângulo, oferecendo uma alternativa ao Teorema de Pitágoras tradicional.

## 🧮 A Fórmula

A calculadora baseia-se na seguinte fórmula personalizada:

**C = K × B + A**

Onde o coeficiente **K** é calculado como:

**K = √((A/B)² + 1) - A/B**

* **A**: Cateto menor
* **B**: Cateto maior
* **C**: Hipotenusa
* **K**: Coeficiente de proporção

O usuário tem a opção de inserir o valor de K manualmente ou deixar que o sistema o calcule automaticamente com base nos catetos fornecidos.

## 🚀 Tecnologias Utilizadas

* **Vite** - Ferramenta de build rápida
* **React** - Biblioteca JavaScript para construção da interface
* **TypeScript** - Superset tipado de JavaScript
* **CSS3** - Estilização com variáveis CSS (OKLCH) para um tema escuro moderno

## 💻 Como rodar localmente

Siga os passos abaixo para executar o projeto em sua máquina:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Nagato09-dev/gabriel-hypotenuse-calc.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd gabriel-hypotenuse-calc
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

## 🌐 Como fazer o deploy

O projeto está configurado para ser publicado no GitHub Pages. Para fazer o deploy de uma nova versão, execute:

```bash
pnpm run deploy
```

## 🔗 Link do Projeto

O site está publicado e pode ser acessado em:
[https://nagato09-dev.github.io/gabriel-hypotenuse-calc/](https://nagato09-dev.github.io/gabriel-hypotenuse-calc/)

## ✨ Créditos

Fórmula criada por **Gabriel**.
Interface e design inspirados em calculadoras científicas modernas.
