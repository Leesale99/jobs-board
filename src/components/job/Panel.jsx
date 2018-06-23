// @flow

import React from 'react';
import styled from 'styled-components';

import { Input } from '../ui';
import ResultList from './ResultList';
import ResultDetails from './ResultDetails';

const StyledSearchPanel = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'panel-header panel-header'
    'panel-sidebar panel-main';
  background: #fff;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  .search-panel__header {
    grid-area: panel-header;
  }

  .search-panel__sidebar {
    grid-area: panel-sidebar;
    border-right: 1px solid
      ${(props: { theme: Theme }) => props.theme.getColor('borderColor')};
    overflow-y: scroll;
  }

  .search-panel__main {
    grid-area: panel-main;
  }

  .filter {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-column-gap: 1.5rem;
    padding: 1.5rem;
    border-bottom: 1px solid
      ${(props: { theme: Theme }) => props.theme.getColor('borderColor')};
  }

  .results {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const SearchPanel = () => (
  <StyledSearchPanel className="search-panel">
    <header className="search-panel__header">
      <div className="filter">
        <Input small type="text" placeholder="Job Type" />
        <Input small type="text" placeholder="Date Posted" />
        <Input small type="text" placeholder="Salary range" />
      </div>
    </header>
    <div className="search-panel__sidebar">
      <ResultList category="jobs" />
    </div>
    <div className="search-panel__main">
      <ResultDetails resultId="1" />
    </div>
  </StyledSearchPanel>
);

export default SearchPanel;