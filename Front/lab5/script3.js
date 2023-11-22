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

const DataTable = ({headers, data}) => {
  return (
    <table>
      <tr>
        {headers.map((elem) =>
        <th>{elem}</th>)}
      </tr>
      {data.map((row) =>
      <tr>
        {headers.map((key) => 
        <td>{row[key]}</td>)}
      </tr>)}
    </table>
  )
}  

const headers = ["marka", "model", "rokProdukcji", "moc"]
const data = [
  { marka: "Toyota", model: "Corolla", rokProdukcji: 2020, moc: 120 },
  { marka: "Ford", model: "Focus", rokProdukcji: 2019, moc: 110 },
  { marka: "Honda", model: "Civic", rokProdukcji: 2021, moc: 130 },
  { marka: "Volkswagen", model: "Golf", rokProdukcji: 2018, moc: 100 },
  { marka: "BMW", model: "3 Series", rokProdukcji: 2022, moc: 150 }
];

function Root(props) {
  return (
    <div>
      <Menu data={menuData}/>
      <PhotoGallery URLArray={URLArray}/>
      <DataTable headers={headers} data={data}/>
    </div>
  );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

