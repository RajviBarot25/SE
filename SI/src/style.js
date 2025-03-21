import styled from "styled-components";

// App Layout
export const AppContainer = styled.div`
  display: flex;
`;

// Sidebar (Navigation)
export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background: #1e3a8a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

// Dashboard Container
export const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`;

// Course Card
export const CourseCard = styled.div`
  padding: 20px;
  color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};


export const appStyles = {
  padding: '20px',
};

export const headerStyles = {
  textAlign: 'center',
  marginBottom: '20px',
};

export const headerH1Styles = {
  fontSize: '2.5rem',
  margin: '0',
};

export const statsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '20px',
};

// export const statCardStyles = {
//   backgroundColor: '#fff',
//   padding: '20px',
//   borderRadius: '10px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   textAlign: 'center',
//   width: '22%',
// };

// export const statCardH2Styles = {
//   fontSize: '2rem',
//   margin: '0',
// };

// export const statCardPStyles = {
//   fontSize: '1rem',
//   color: '#666',
// };