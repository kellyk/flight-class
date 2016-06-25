var CatFavorite = flight.component(catFavorite);

function catFavorite() {
   this.defaultAttrs({
    catSelector: '.cat',
    loveClass: 'love',
    loveSelector: '.love'
  });

  this.love = function(e) {
    $(e.target).closest(this.attr.catSelector).toggleClass(this.attr.loveClass);
  };

  this.after('initialize', function() {
    this.on('click', {
      catSelector: this.love
    });

    var componentCats = this.select('catSelector');
    var globalCats = $('.cat');

    console.log("component count: ", componentCats.length);
    console.log("global count: ", globalCats.length);

    this.on('click', this.anyClick);
    this.on('someEvent', this.someEvent);
  });
}

CatFavorite.attachTo('.main');
