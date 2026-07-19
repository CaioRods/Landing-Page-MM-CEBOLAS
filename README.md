# M&M Cebolas — Landing Page

Landing page institucional da **M&M Cebolas**, com hero em vídeo fullscreen e
animações cinematográficas amarradas ao scroll.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **motion** (Framer Motion) para todas as animações
- CSS puro com design system em variáveis

## Rodando localmente

```bash
npm install
npm run dev        # servidor de desenvolvimento (porta 5173)
```

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build gerado
```

## Estrutura

```
src/
  components/
    Intro.tsx         Abertura cinematográfica (cortina + marca)
    Navbar.tsx        Nav fixa, esconde ao descer, marca seção ativa
    Hero.tsx          Vídeo fullscreen com parallax e título em máscara
    About.tsx         Quem somos, com wipe na imagem
    Products.tsx      Grade dos 5 tipos de cebola
    Process.tsx       7 etapas com linha que se desenha no scroll
    Impact.tsx        Números com contagem + mapa do Brasil
    BrazilMap.tsx     Mapa SVG com rotas animadas (GeoJSON real)
    Structure.tsx     Galeria com parallax horizontal
    VideoCTA.tsx      Bloco de vídeo com zoom amarrado ao scroll
    Quality.tsx       Diferenciais
    Testimonials.tsx  Depoimentos
    Contact.tsx       Contato e localização
    Footer.tsx
    SplitText.tsx     Revelação de título palavra por palavra
    RevealImage.tsx   Imagem com wipe + parallax
    ScrollFX.tsx      Barra de progresso, grão de filme, marquee
    Counter.tsx       Números que contam ao entrar na tela
public/
  hero-field.mp4      Vídeo de fundo do hero
  img/                Fotos de produtos e estrutura
```

## Pendências

Os dados de contato estão como marcadores (`[Telefone / WhatsApp]`,
`[E-mail de contato]`, `[Endereço da empresa]`) e os depoimentos são
fictícios — substituir pelos reais antes de publicar.

## Créditos de mídia

Vídeo e fotos de bancos de imagem gratuitos ([Pexels](https://pexels.com)),
livres para uso comercial.
