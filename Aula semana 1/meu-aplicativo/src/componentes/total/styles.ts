import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 24px;
    border-radius: 12px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.MD}px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.dark};
`;