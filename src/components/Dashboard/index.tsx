import React, { useState, FormEvent } from 'react';

import { InfoContainer, Title, Form, Result, SubTitle } from './style';
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
        <SubTitle>Confirmed Cases:</SubTitle>
        <Result>{countryStatistics?.confirmed}</Result>
        <SubTitle>Recovered Cases:</SubTitle>
        <Result>{countryStatistics?.recovered}</Result>
        <SubTitle>Critical Cases:</SubTitle>
        <Result>{countryStatistics?.critical}</Result>
        <SubTitle>Deaths:</SubTitle>
        <Result>{countryStatistics?.deaths}</Result>
        <SubTitle>Last Update:</SubTitle>
        <Result>{countryStatistics?.lastUpdate.slice(0, -15)}</Result>
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
