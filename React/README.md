# useEffect vs useLayoutEffect

<pre>
    useEffect(()=>{
        console.log("useEffect 1");
    },[])
    useEffect(()=>{
        console.log("useEffect 2");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayEffect 1");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayEffect 1");
    },[])
    console.log("rendering");

-- Output --

	rendering
	useLayEffect 1
	useLayEffect 1
	useEffect 1
	useEffect 2
</pre>


# Problem Statement

- Display all rows in a table.
- Global search input that filters by all columns (case-insensitive).
- Sortable columns when clicking on headers (toggle ASC/DESC).
- Memoization of filtered & sorted data using useMemo

Note: Learn use of useMemo 


## Code

```jsx
import React, { useState, useEffect, useMemo } from 'react';
import './style.css';


const api =
  'https://gist.githubusercontent.com/abhijit-jena21/4726b3ab051e901893a6eb04a7e36071/raw/e009e7502421dc16993af06c2cfd73b315654bad/tableData.json';

export default function App() {
  const [userData, setUserData] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', dir: 'asc' });
  // const
  const getData = async () => {
    const userDataFetch = await fetch(api);
    const response = await userDataFetch.json();
    console.log('response', response);
    setUserData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredAndSortedData = useMemo(() => {
    let filteredData = userData;

    console.log('search', searchedText);
    // if (!searchedText) return userData;
    if (searchedText) {
      const result = userData?.filter((user) =>
        Object.values(user).includes(searchedText)
      );
      filteredData = result;
    }

    if (sortConfig.key) {
      filteredData = [...filteredData].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (typeof aVal === 'string') {
          return sortConfig.dir === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        } else {
          return sortConfig.dir === 'asc' ? aVal - bVal : bVal - aVal;
        }
      });
    }

    return filteredData;
  }, [userData, searchedText, sortConfig]);

  const handleSort = (key) => {
    console.log('click', key, sortConfig);
    setSortConfig((prev) => {
      if (prev.key == key) {
        return {
          key,
          dir: prev.dir === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, dir: 'asc' };
    });
  };

  return (
    <div>
      <input
        type="text"
        name="search-input"
        placeholder="Search"
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
              Id
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('name')}
            >
              Name
            </th>
            <th style={{ cursor: 'pointer' }} onClick={() => handleSort('age')}>
              Age
            </th>
            <th
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('city')}
            >
              City
            </th>
          </tr>
        </thead>
        {filteredAndSortedData?.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

```
