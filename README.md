# Racket360 landing page

Landing page isolada para racket360.com. A animação principal usa SVG e o progresso real do scroll: a bola atravessa o campo e revela quatro momentos do produto.

## Abrir localmente

python3 -m http.server 4173

Abrir http://localhost:4173.

## Antes de publicar

- O formulário abre o cliente de email para `suporte@racket360.com`; substitui por uma Edge Function quando quiseres recolher pedidos diretamente.
- Trocar o CTA pelo URL real de TestFlight ou signup.
- Configurar racket360.com e www.racket360.com no hosting.
- Publicar apple-app-site-association e assetlinks.json para os links /join/*.
- Acrescentar política de privacidade e termos quando o formulário começar a recolher dados.
