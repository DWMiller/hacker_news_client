import styled from 'styled-components';

export const PaginationStyles = styled.div`
  .pagination {
    padding-left: 0;
  }

  .pagination > li {
    display: inline;
  }

  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    padding: 6px 12px;
    line-height: 1.42857143;
    text-decoration: none;
    color: #337ab7;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;
  }

  .pagination > .active > a,
  .pagination > .active > a:focus,
  .pagination > .active > a:hover,
  .pagination > .active > span,
  .pagination > .active > span:focus,
  .pagination > .active > span:hover {
    z-index: 3;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    cursor: default;
  }

  .pagination > li > a:focus,
  .pagination > li > a:hover,
  .pagination > li > span:focus,
  .pagination > li > span:hover {
    z-index: 2;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
  }
`;
