import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    a {
        display: flex;
    }
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    color: white;
    border: 0;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 3px;
    padding: 7px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
    background: #f40612;
    }
`;

export const Logo = styled.img`
    height: 75px;
    width: 134px;
    margin-right: 40px;

    @media (min-width: 1449px) {
    height: 90px;
    width: 167px;
}
`;