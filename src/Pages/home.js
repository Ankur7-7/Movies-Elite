import React from 'react';
import {JumbotronContainer}  from '../Containers/Jumbotron';
import {Feature, Optform} from '../Components'
import FaqsContainer  from '../Containers/faq';
import {FooterContainer}  from '../Containers/footer';
import {HeaderContainer}  from '../Containers/header';

export default function HOME(){
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <Optform>
                        <Optform.Text>Ready to watch? Enter your email to create or restart your membership.</Optform.Text>
                        <Feature.Break/>
                        <Optform.Input placeholder="Email address"/>
                        <Optform.Button>Try it now</Optform.Button>
                    </Optform>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    );
}