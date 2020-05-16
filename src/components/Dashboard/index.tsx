import React, { useState, FormEvent } from 'react';

import { InfoContainer, Title, Form, Table } from './style';
import api from '../../service/api';

interface StatistcObject {
  country: string;
  confirmed: number;
  recovered: number;
  critical: number;
  deaths: number;
  lastUpdate: string;
}

const Dashboard: React.FC = () => {
  const [newCountry, setNewCountry] = useState('');
  const [countryStatistics, setCountryStatistcs] = useState<StatistcObject>();

  async function handleInfoCovid(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`country?name=${newCountry}&format=json`);

    const statistcs: Array<StatistcObject> = response.data;

    setCountryStatistcs(statistcs[0]);
  }

  return (
    <>
      <InfoContainer>
        <Title>
          Cases in:
          {countryStatistics?.country}
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Confirmed Cases</th>
              <th>Recovered Cases</th>
              <th>Critical number</th>
              <th>Deaths</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{countryStatistics?.confirmed}</td>
              <td>{countryStatistics?.recovered}</td>
              <td>{countryStatistics?.critical}</td>
              <td>{countryStatistics?.deaths}</td>
              <td>{countryStatistics?.lastUpdate}</td>
            </tr>
          </tbody>
        </Table>
      </InfoContainer>

      <Form onSubmit={handleInfoCovid}>
        <input
          type="text"
          placeholder="COUNTRY NAME"
          value={newCountry}
          onChange={(e) => {
            setNewCountry(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default Dashboard;
