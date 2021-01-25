import React from 'react';
import './style.css';

const Table = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Horóscopo Chino</th>
          <th scope="col">Años de nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Rata</th>
          <td>1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020.</td>
        </tr>
        <tr>
          <th scope="row">Buey</th>
          <td>1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021.</td>
        </tr>
        <tr>
          <th scope="row">Tigre</th>
          <td>1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022.</td>
        </tr>
        <tr>
          <th scope="row">Conejo</th>
          <td>1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2023.</td>
        </tr>
        <tr>
          <th scope="row">Dragón</th>
          <td>1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024.</td>
        </tr>
        <tr>
          <th scope="row">Serpiente</th>
          <td>1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025.</td>
        </tr>
        <tr>
          <th scope="row">Caballo</th>
          <td>1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026.</td>
        </tr>
        <tr>
          <th scope="row">Cabra</th>
          <td>1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027.</td>
        </tr>
        <tr>
          <th scope="row">Mono</th>
          <td>1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028.</td>
        </tr>
        <tr>
          <th scope="row">Gallo</th>
          <td>1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029.</td>
        </tr>
        <tr>
          <th scope="row">Perro</th>
          <td>1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030.</td>
        </tr>
        <tr>
          <th scope="row">Cerdo</th>
          <td>1911, 1923, 1935, 1947, 1971, 1983, 1995, 2007, 2019, 2031.</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
