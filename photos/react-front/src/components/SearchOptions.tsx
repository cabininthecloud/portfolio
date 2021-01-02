import React from 'react';
import styled from 'styled-components';

const StyledSearchOptions = styled.div`
  display: flex;
`;

const StyledPerPageContainer = styled.div``;

function SearchOptions(): JSX.Element {
  return (
    <StyledSearchOptions>
      <StyledPerPageContainer>
        <label htmlFor="num">Photos per Page</label>
        <select name="number" id="num">
          <option>6</option>
          <option>12</option>
          <option>24</option>
        </select>
      </StyledPerPageContainer>
    </StyledSearchOptions>
  );
}

export default SearchOptions;
