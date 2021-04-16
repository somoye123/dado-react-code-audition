import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { CommitDetails } from '../components';
import GithubApi from '../api/githubApi';

const CommitViewer = ({ searchValue, loading, setLoading }) => {
  const [commits, setCommits] = useState([]);

  const getCommit = async (repoName) => {
    try {
      setLoading(true);
      const data = await GithubApi(repoName);
      if (data) setCommits(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCommit(searchValue);
  }, [searchValue]);

  return (
    <>
      <CommitViewerPageHeaderContainer>
        <div>CommitViewer</div>
      </CommitViewerPageHeaderContainer>
      <CommitViewerPageMainContainer>
        <h1>{searchValue}</h1>
        {loading && <small>Loading...</small>}
        {!loading
          && commits.map((commit) => (
            <CommitDetails key={commit.node_id} Commit={commit} />
          ))}
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

const CommitViewerPageMainContainer = styled.main`
  h1 {
    margin: 32px 0;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -1.5px;
    color: var(--primaryColor);
  }
  small {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.4px;
    color: var(--primaryColor);
    display: block;
  }
`;

CommitViewer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default CommitViewer;
