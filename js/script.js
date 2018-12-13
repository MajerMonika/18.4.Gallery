'use scrict';

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju.',
    image: 'images/HarryPotter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny.',
    image: 'images/KrolLew.jpg'
  },
  {
    id: 3,
    title: 'Pingwiny z Madagaskaru',
    desc: 'Film o pingwinach-komandosach.',
    image: 'images/Pingwiny.jpg'
  },
  {
    id: 4,
    title: 'Kraina lodu',
    desc: 'Film o Annie, która wyrusza na wielką wyprawę, by odnaleźć swoją siostrę Elsę.',
    image: 'images/KrainaLodu.jpg'
  },
  {
    id: 5,
    title: 'Shrek',
    desc: 'Film o sympatycznym ogrze.',
    image: 'images/Shrek.jpg'
  },
  {
    id: 6,
    title: 'Vaiana: Skarb oceanu',
    desc: 'Film o Vaianie i jej przygodach.',
    image: 'images/Vaiana.jpg'
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      React.createElement("h2", {}, this.props.title)
    );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      React.createElement("p", {}, this.props.desc)
    );
  }
});

var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      React.createElement("img", {
        src: this.props.image
      }, )
    );
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      React.createElement("li", {
          key: this.props.movie.id
        },
        React.createElement(MovieTitle, {
          title: this.props.movie.title
        }),
        React.createElement(MovieDescription, {
          desc: this.props.movie.desc
        }),
        React.createElement(MovieImage, {
          image: this.props.movie.image
        })
      )
    );
  }
});

var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
  },
  render: function () {
    var moviesElements = this.props.list.map(function (movie) {
      return (React.createElement(Movie, {
        movie: movie,
        key: movie.id
      }))
    });
    return (React.createElement("ul", {}, moviesElements))
  }
});

var element =
  React.createElement("div", {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement(MovieList, {
      list: movies
    })
  );

ReactDOM.render(element, document.getElementById('app'));
