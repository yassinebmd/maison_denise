import styled from 'styled-components';

export const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Jumbotron = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
  text-align: center;
`;

export const EventCard = styled.div`
  box-shadow: 0 5px 10px 1px rgba(0,0,0,0.1);
  background: rgba(255, 255, 255, 0.90);
  border-radius: 5px;
  overflow: hidden;
  margin: 2em auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
`;

export const ProductImage = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  padding: 15px;

  img {
    width: 80%;
    height: auto;
    transition: all 0.3s ease-out;
    
    @media (max-width: 768px) {
      width: 100%;
      max-width: 200px;
      transition: none;
    }
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ProductDetails = styled.div`
  flex: 2;
  min-width: 300px;
  padding: 20px;

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #344055;
    margin-top: 0;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: 500;
    color: #344055;
  }

  p {
    font-size: 0.875rem;
    color: #344055;
    line-height: 1.6;
    text-align: justify;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 15px;
  }
`;

export const DateTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #edb52e;
  color: white;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 5px;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 10px;
    display: inline-block;
  }
`;

export const EventTypeBadge = styled.span`
  background-color: #403b29;
  color: white;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 0.75rem;
  margin-left: 10px;
`;

export const ResponsiveText = styled.div`
  h3 {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
  }

  h4 {
    font-size: 1.125rem !important;
    font-weight: 600 !important;
  }

  h5 {
    font-size: 1rem !important;
    font-weight: 500 !important;
  }

  p {
    font-size: 0.875rem !important;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.9rem !important;
    }
  }
`;

// Add more styled components as needed