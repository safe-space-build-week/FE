import React from "react";
import { Router, Link } from "react-router-dom";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";
import styled from "styled-components";

const StyledDashboardWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledSignOut = styled(Link)`
  color: black;
  font-size: 35px;
`;

const StyledDashBoardLogo = styled.h1`
  font-family: "Pacifico", cursive;
`;

const StyledDashboardHeader = styled.header`
  background-color: #28a745;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <StyledDashboardHeader>
          <StyledDashBoardLogo>Safe Space</StyledDashBoardLogo>
          <StyledSignOut to="/" onClick={() => localStorage.clear()}>
            <i class="fas fa-sign-out-alt" />
          </StyledSignOut>
        </StyledDashboardHeader>
        <StyledDashboardWrapper>
          <NotesForm />
          <NotesList />
        </StyledDashboardWrapper>
      </div>
    );
  }
}

export default Dashboard;
