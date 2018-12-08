---
title: Fazendo deploy no Github Pages com Gulp
date: 2016-03-29 19:53:45
tags: ["deploy", "gulp", "blog", "tools"]
---
![gulp](./gulp.jpg)

Recentemente mudei a plataforma que usava para publicar os **posts** do blog. Começei a publicar usando o [Hexo](https://hexo.io/), que é uma ferramenta incrível
para gerar arquivos estáticos para o seu blog ou para a página do seu projeto<!-- more -->, como bem descrito nesse [post](http://blog.da2k.com.br/2014/01/05/hexo-criando-um-blog-ao-estilo-miojo/) do [Fernando Daciuk](http://da2k.com.br/).
Porém, no meio do caminho, conheci o [Harmonic](http://harmonicjs.com/) que é um projeto feito por desenvolvedores da comunidade **JS** brasileira e que está sendo escrito, já com as mais novas implementações da **Javascript(ES2015/ES6 - ES2016/ES7)**. Isso me chamou a atenção. Vi a oportunidade de, além de publicar, aprender mais sobre o desenvolvimento de uma ferramenta dessas e também possibilidade de construir temas para o **Harmonic**.

Pois bem, eis que surgem as demandas.

~~Começei a construir meu próprio tema, o [harmonic-theme-profile](https://github.com/adamsalves/harmonic-theme-profile)~~, e aprendi muito com essa iniciativa. Mas surgiram alguns contratempos referentes ao *workflow*.

## O "Problema"

No *Harmonic* não temos a opção de fazer o deploy diretamente do `CLI` como encontramos no *Hexo*. Mas isso não é um impedimento, muito pelo contrário. É um estímulo para contribuir com o projeto. Não acham? (Veja [aqui](https://github.com/JSRocksHQ/harmonic/blob/master/CONTRIBUTING.md) como contribuir)

## A Resolução

Enquanto não temos essa *feature* no *CLI* do Harmonic, podemos contornar esse nosso "problema" com uma ferramenta muito útil para o *front-end*.
E é aqui que entra o [Gulp](http://gulpjs.com/). Um automatizador de tarefas para *front-end* que da conta de várias tarefas repetitivas no *workflow*.

Nesse caso, ele vai nos ajudar a fazer o *deploy* dos estáticos do blog para o [Github Pages](https://pages.github.com/).

Temos que seguir alguns passos antes de ter condições para fazer o *deploy*, vamos lá?

1. Instalar o *Gulp* globalmente com o camando: `npm install --global gulp`
2. Instalar o *Gulp* como *devDependencies* do seu projeto: `npm install --save-dev gulp`
3. Instalar o *gulp-gh-pages* que é o `plugin` que fará o deploy: `npm install --save-dev gulp-gh-pages`
4. Criar na raiz do seu projeto um *gulpfile.js*

Depois de seguir esses passos, já temos condições de criar a *task* que irá realizar o deploy.

Nosso `Gulpfile` parcial ficará assim então:

``` javascript
  var gulp = require('gulp');
  var ghPages = require('gulp-gh-pages');

  gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages());
  });
```

Depois de fazer os `requires` do `gulp` e do `gulp-gh-pages`, começamos a escrever a *task*. Como primeiro parâmetro passamos o nome da *task*, `deploy`, e como segundo, uma função anônima. Nela está descrito o diretório onde queremos que os arquivos sejam pegos, no caso `./dist/**/*`. Este comando irá, recursivamente, pegar todas as pastas e arquivos, para depois, com a função `ghPages()` realizar o deploy de fato.

Aqui temos algumas opções. Vamos inserir um objeto na função `ghPages()` com duas propriedades, `remoteUrl` e `branch`. A primeira irá dizer ao `plugin` para qual repositório queremos enviar os arquivos selecionados e a segunda escolheremos qual `branch` queremos que ele ocupe no `github`, no caso, a `master`. Mas você pode conferir mais opções para o *deploy* na página do  [projeto gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages) no Github.

Bem, o resultado final do nosso `gulpfile` até aqui é o seguinte:

``` javascript
  var gulp = require('gulp');
  var ghPages = require('gulp-gh-pages');

  gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages({
        remoteUrl: 'https://github.com/youruser/youruser.github.io.git',
        branch: 'master'
      }));
  });
```

Com tudo *ok*, é só irmos para o terminal, rodar a *task* assim: `gulp deploy`, nós autenticarmos no github e pronto. Nossos arquivos estáticos estarão atualizados no *Github Pages*.

## Conclusão

Vimos como é simples usar o *Gulp* para fazer `deploy` no `Github Pages`. Suas funcionalidades para o `front-end` são inúmeras e não param de crescer. Recomendo fortemente que você separe um tempo para conhecer mais a fundo o **Gulp**.

É isso. Espero que com esse passo a passo, consigamos resolver esse "problema" do `deploy` no `Harmonic`.

Um abraço e até a próxima.

> UPDATE: Voltei a publicar com Hexo e o tema do Harmonic não está mais sendo desenvolvido, mas acredito que o post ainda é útil.