import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import GithubApi from '../api/githubApi';

const CommitViewer = ({ searchValue, loading, setLoading }) => {
  const [commits, setCommits] = useState([]);

  //   const getCommit = async (repoName) => {
  //     try {
  //       const data = await GithubApi(repoName);
  //       if (data) setCommits(data);
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };

  useEffect(() => {
    // getCommit(searchValue);
    setCommits([]);
  }, [searchValue]);

  console.log(commits);
  return (
    <>
      <CommitViewerPageHeaderContainer>
        <div>CommitViewer</div>
      </CommitViewerPageHeaderContainer>
      <CommitViewerPageMainContainer>
        <h1>tund</h1>
      </CommitViewerPageMainContainer>
    </>
  );
};

const CommitViewerPageHeaderContainer = styled.nav`
  height: 82px;
  background: var(--commitHeader);
  padding-top: 24px;
  div {
    height: 34px;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.6px;
    color: var(--primaryColor);
  }
`;

const CommitViewerPageMainContainer = styled.main``;

CommitViewer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default CommitViewer;
