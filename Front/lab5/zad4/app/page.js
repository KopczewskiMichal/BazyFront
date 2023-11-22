'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const QuoteOfTheDay = ({ quotes }) => {
    const [quote, setQuote] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
  
    useEffect(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
      setQuote(randomQuote);
  
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      setFormattedDate(formattedDate);
    }, []); 
  
    return (
      <div>
        {quote && (
          <>
            <p>Autor: {quote.author}</p>
            <p>Cytat: {quote.quote}</p>
            <p>Dzisiejsza data: {formattedDate}</p>
          </>
        )}
      </div>
    );
  };

  const SortableTable = ({ headers, data }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortColumn, setSortColumn] = useState(null);
  
    const handleHeaderClick = (colName) => {
      setSortColumn(colName);
  
      const sorted = sortedData;
      sorted.sort((a, b) => {
        if (a[colName] > b[colName]) return 1;
        if (a[colName] < b[colName]) return -1;
        return 0;
      });
  
      setSortedData(sorted);
    };
  
    useEffect(() => {
    }, [sortColumn, sortedData]);
  
    return (
      <table>
        <thead>
          <tr>
            {headers.map((elem) => (
              <th key={elem}>
                <button onClick={() => handleHeaderClick(elem)}>
                  {elem}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((key, colIndex) => (
                <td key={colIndex}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  
    const quotes = [
      { quote: 'Największym ryzykiem jest nie podejmowanie żadnego ryzyka.', author: 'Mark Zuckerberg' },
      { quote: 'Bądź zmianą, którą chcesz widzieć w świecie.', author: 'Mahatma Gandhi' },
      { quote: 'Sukces to nie końcowa stacja, sukces to podróż.', author: 'Zig Ziglar' },
      { quote: 'Człowiek, który myśli, że może, i człowiek, który myśli, że nie może, mają rację obaj.', author: 'Henry Ford' },
      { quote: 'Nie sukces definiuje nas, ale nasza determinacja do osiągania celów.', author: 'Jeremy Limn' },
      { quote: 'Życie to 10% tego, co ci się przydarza, i 90% tego, jak na to reagujesz.', author: 'Charles R. Swindoll' },
      { quote: 'Najlepszym sposobem przewidzenia przyszłości jest jej stworzenie.', author: 'Peter Drucker' },
      { quote: 'Rób dzisiaj to, co inni nie chcą, rób jutro to, co inni nie mogą.', author: 'Jerry Rice' },
      { quote: 'Twoje ograniczenia są tylko w twojej wyobraźni.', author: 'Jamie Paolinetti' },
      { quote: 'Nigdy nie jest za późno na to, aby być tym, kim chciałeś być.', author: 'George Eliot' },
      { quote: 'Sukces to suma małych wysiłków powtarzanych dzień po dniu.', author: 'Robert Collier' },
      { quote: 'Jakość jest najlepszym biznesem.', author: 'John Lasseter' },
      { quote: 'Działanie to klucz do wszelkiego sukcesu.', author: 'Pablo Picasso' },
      { quote: 'Chcąc, czy nie chcąc, robimy to, co najważniejsze.', author: 'Pablo Neruda' },
      { quote: 'Twoje jedyne ograniczenie to twoje własne przekonania.', author: 'Bob Proctor' },
      { quote: 'Każda porażka to krok do przodu.', author: 'Chinonye J. Chidolue' },
      { quote: 'Jeśli chcesz coś zmienić, zacznij od siebie.', author: 'Tom Rath' },
      { quote: 'W sukcesie najważniejsze jest zaczęcie.', author: 'Mark Twain' },
      { quote: 'Najtrudniejszy krok to ten pierwszy.', author: 'Martin Luther King Jr.' },
      { quote: 'Nie ma drogi do sukcesu, sukces to drabina.', author: 'Zig Ziglar' }
    ];
    const headers = ["marka", "model", "rokProdukcji", "moc"]
    const data = [
      { marka: "Toyota", model: "Corolla", rokProdukcji: 2020, moc: 120 },
      { marka: "Ford", model: "Focus", rokProdukcji: 2019, moc: 100 },
      { marka: "Honda", model: "Civic", rokProdukcji: 2021, moc: 130 },
      { marka: "Volkswagen", model: "Golf R", rokProdukcji: 2018, moc: 300 },
      { marka: "BMW", model: "3 Series", rokProdukcji: 2022, moc: 150 }
    ];
      
  return (
    <div>
   <QuoteOfTheDay quotes={quotes} />
   <SortableTable headers={headers} data={data} />  
    </div>
   );
}
