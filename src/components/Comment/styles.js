import styled, { css } from 'styled-components';

export const CommentWrapper = styled.div`
  margin-bottom: 1em;
  word-wrap: break-word;
  color: ${props => (props.isMinimized ? 'gray' : 'inherit')};
  font-size: ${props => (props.isMinimized ? '0.75' : 'inherit')};

  .comment__content {
    background: rgb(255, 255, 255);
    padding: 1em;
    border-bottom: 1px solid rgb(204, 204, 204);
    box-shadow: ${props => props.theme.shadow};

    .comment__textWrapper {
      overflow: auto;
    }

    .comment__readMoreLink {
      display: block;
      margin-top: 1em;
      text-align: right;
      text-decoration: none;
    }

    ${props =>
      props.isMinimized &&
      css`
        box-shadow: none;
        border: none;
      `};
  }

  .comment__childrenWrapper {
    margin-left: 0.5rem;

    @media (min-width: 800px) {
      margin-left: 1.5rem;
    }
  }
`;
