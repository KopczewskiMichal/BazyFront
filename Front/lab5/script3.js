// plik do zadania 3

const menuData = [
  {name: 'Home', link: '/home'},
  {name: 'Page1', link: '/page1'},
  {name: 'Page2', link: '/page2'}
]

const URLArray = [
  "https://rentdreamcar.pl/wp-content/uploads/2022/06/pakiety-bmw.jpg",
  "https://cdn-8.motorsport.com/images/amp/YW7plbDY/s6/bmw-m3-cs-1.jpg",
  "https://a.allegroimg.com/s1024/0ca363/e75c600f4dc98efd464b8c2ea414"
]

const Menu = ({data}) => (
  <nav>
    {data.map((elem)=> (
      <a href={elem.link}>{elem.name}</a>
))}
  </nav>
);
    
const PhotoGallery = ({URLArray}) => {
  const ClicablePhoto = ({src}) => {
    return (
      <a href={src} target="_blank">
        <img src={src} alt="Zdjęcie nie posiada opisu" />
      </a>
    )
  }

  return (
    <div>
      {URLArray.map((elemURL) => (
        <ClicablePhoto src={elemURL}/>
      ))}
    </div>
  )
};

// function Root(props) {
//   return (
//     <div>
//       <Menu data={menuData}/>
//       <PhotoGallery URLArray={URLArray}/>
//     </div>
//   );
// }

function Root(props) {
  return (
    <div>
      <Menu data={menuData}/>
      <PhotoGallery URLArray={URLArray}/>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

