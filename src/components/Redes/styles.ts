import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const IconLink = styled.a`
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  img {
    width: 32px;
    height: 32px;
  }
`
