import styled from 'styled-components';

export const StoryContainer = styled.div`
  margin-bottom: 0.5em;
  padding: 10px 10px 10px 15px;
  background: rgb(255, 255, 255);
  box-shadow: ${props => props.theme.shadow};

  @media (min-width: 600px) {
    padding-right: 60px;
  }

  .story__title {
    font-weight: bold;
    font-family: serif;
    font-size: 1.5rem;
    margin: 0 0 0.5em 0;

    a {
      white-space: normal;
      text-decoration: none;
      color: ${props => props.theme.black};
    }

    a svg {
      color: #4a913c;
    }

    a:visited svg {
      color: grey;
    }

    @media (min-width: 600px) {
      font-size: 2rem;
      margin: 0;
    }
  }

  .story__summary {
    margin: 0;
  }

  .story__skeleton {
    height: 53px;
  }
`;
