


// import React, { Component } from 'react';
// import { AppRegistry, View, Image } from 'react-native';
//
// export default class DisplayAnImage extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           source={require('/react-native/img/favicon.png')}
//         />
//       </View>
//     );
//    }
//   }

// import ImageLoader from 'react-image-file';

  var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju.',
      poster: 'photos/harrypotter.jpeg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o lwie - królu sawanny.',
      poster: 'photos/king_lion.jpeg'
    },
    {
      id: 3,
      title: 'Czterysta batów',
      desc: 'Moving story of a young boy who, left without attention, delves into a life of petty crime.',
      poster: 'photos/czterysta_batow.jpg'
    }
  ];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
